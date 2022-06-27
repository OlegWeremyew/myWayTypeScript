import { Dispatch } from 'redux';

import { usersAPI } from 'Api';
import { ResultCodesEnum } from 'Api/enums';
import { APIResponseType } from 'Api/types';
import { UserActions } from 'redux/usersReducer';
import { ActionUsersTypes, FilterType, ThunkUsersType } from 'redux/usersReducer/types';

export const requestUsers =
  (page: number, pageSize: number, filter: FilterType): ThunkUsersType =>
  async dispatch => {
    dispatch(UserActions.toggleIsFetching(true));
    dispatch(UserActions.setCurrentPage(page));
    dispatch(UserActions.setFilter(filter));

    const getUsersData = await usersAPI.getUsers(
      page,
      pageSize,
      filter.term,
      filter.friend,
    );

    dispatch(UserActions.toggleIsFetching(false));
    dispatch(UserActions.setUsers(getUsersData.items));
    dispatch(UserActions.setTotalUsersCount(getUsersData.totalCount));
  };

export const followUnfollowFlow = async (
  dispatch: Dispatch<ActionUsersTypes>,
  userId: string,
  apiMethod: (userId: string) => Promise<APIResponseType>,
  actionCreator: (userId: string) => ActionUsersTypes,
): Promise<void> => {
  dispatch(UserActions.toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);

  if (response.resultCode === ResultCodesEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(UserActions.toggleFollowingProgress(false, userId));
};

export const follow =
  (userId: string): ThunkUsersType =>
  async dispatch => {
    await followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      UserActions.followSuccess,
    );
  };

export const unFollow =
  (userId: string): ThunkUsersType =>
  async dispatch => {
    await followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      UserActions.unfollowSuccess,
    );
  };
