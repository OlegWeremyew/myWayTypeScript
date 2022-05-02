import React, {useState} from 'react';
import style from "./News.module.scss"
import {useDispatch, useSelector} from "react-redux";

import {NewsItem} from "./NewsItem/NewsItem";
import {NewsActions, NewsType} from "../../../redux/NewsReducer";
import {getIsFetching} from "../../../selectors/usersSelectors";
import {Preloader} from "../../../common/Preloader/Preloader";
import {getNewsSelector} from "../../../selectors/newsSelectors";
import {EMPTY_STRING} from "../../../constants";

const News = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState<string>(EMPTY_STRING)
    const [error, setError] = useState<string>(EMPTY_STRING)
    const [activateAddMode, setActivateAddMode] = useState<boolean>(false)

    const newsArray: NewsType[] = useSelector(getNewsSelector)
    const isFetching: boolean = useSelector(getIsFetching)

    const activateAddModeHandler = () => {
        setActivateAddMode(!activateAddMode)
    }

    const onChangeHandler = (title: string) => {
        setError("")
        setTitle(title)
    }
    const addNews = () => {
        if (title.trim()) {
            dispatch(NewsActions.addNews(title))
            setError(EMPTY_STRING)
            setTitle(EMPTY_STRING)
        } else {
            setError("Field is required")
        }
    }

    const cancelHandler = () => {
        setActivateAddMode(!activateAddMode)
        setError(EMPTY_STRING)
    }

    return (
        <section className={style.news}>
            {isFetching ? <Preloader/> : null}
            <h3 className={style.news__title}>News</h3>
            <div className={style.newsBlock}>
                {
                    newsArray.map(news => {
                        return (
                            <NewsItem key={news.id} news={news}/>
                        )
                    })
                }
            </div>
            {
                activateAddMode
                    ? (
                        <div className={style.addNewsForm}>
                            {
                                error
                                    ? (
                                        <div className={style.ErrorBlock}>
                                            <textarea
                                                onChange={(e) => onChangeHandler(e.currentTarget.value)}
                                                value={title}
                                                placeholder="write news title"
                                            />
                                            <div className={style.addNewsError}>
                                                {error}
                                            </div>
                                        </div>
                                    ) : (
                                        <textarea
                                            onChange={(e) => onChangeHandler(e.currentTarget.value)}
                                            value={title}
                                            placeholder="write news title"
                                        />
                                    )
                            }
                            <div className={style.button__group}>
                                <div className={style.form__btn} onClick={addNews}>
                                    <button>Save</button>
                                </div>
                                <div className={style.form__btn} onClick={cancelHandler}>
                                    <button>Cancel</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={style.form__btn} onClick={activateAddModeHandler}>
                            <button>Add new news</button>
                        </div>
                    )
            }
        </section>
    )
}

export default News
