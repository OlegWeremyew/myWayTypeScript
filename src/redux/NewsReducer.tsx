import {v1} from "uuid";
import {InferActionTypes} from "./reduxStore";
import {PostType} from "./profileReducer";

export enum NewsReducerEnum {
    ADD_NEWS = "SOCIAL_NETWORK/NEWS/ADD_POST",
    CHANGE_NEWS_TITLE = "SOCIAL_NETWORK/NEWS/CHANGE_NEWS_TITLE",
    CHANGE_NEWS_TEXT = "SOCIAL_NETWORK/NEWS/CHANGE_NEWS_TEXT",
    DELETE_NEWS = "SOCIAL_NETWORK/NEWS/DELETE_NEWS",
}

const initialState = {
    news: [
        {
            id: v1(),
            image: "https://s9.travelask.ru/system/images/files/000/336/893/wysiwyg_jpg/makro-fotografiya.jpg?1502197661",
            text: 'Articles about mushrooms will be useful and interesting for both experienced mushroom pickers and beginners who know only the basics of mushroom gathering. In this section, you will certainly find something that you did not know about before. Picking mushrooms is not just a casual pastime, but a rather serious hobby that will require more and more new, extensive and complete knowledge from you.',
            title: "Mushrooms",
        },
        {
            id: v1(),
            image: "https://funart.pro/uploads/posts/2021-03/1617075044_6-p-oboi-krasota-russkoi-prirodi-7.jpg",
            text: 'I remember the disdainful attitude of the authorities towards people and their problems, which, due to circumstances, constantly arose. I remember skinny collective farm cows that gave a liter of milk a day, and constantly drunk shepherds. It was impossible to buy something officially, but “for a bottle” you could get a lot: hay, straw, grain, silage, and so on. Something to bring, take, plow, mow turned into a big problem. In general, then life in the village was quite difficult. Half a century has passed. What has changed during this time?',
            title: "Village",
        },
        {
            id: v1(),
            image: "https://i.pinimg.com/originals/5a/df/1b/5adf1b97742a65d0a3c98299c545570b.jpg",
            text: 'Full Moon (lat. Luna plena, plenilunium) is the phase of the Moon, at which the difference between the ecliptic longitudes of the Sun and the Moon is 180 °. This means that the plane through the Sun, Earth and Moon is perpendicular to the plane of the ecliptic. If all three objects are on the same line, a lunar eclipse occurs. The full moon looks like a fully illuminated circle.t',
            title: "Full moon",
        },
    ] as NewsType[]
}

export const newsReducer = (state = initialState, action: ActionNewsTypes): initialStateType => {
    switch (action.type) {
        case NewsReducerEnum.ADD_NEWS: {
            let newsItem: NewsType = {
                id: v1(),
                image: "",
                text: "Введите ваш текст",
                title: action.payload.newTitle
            }
            return {
                ...state,
                news: [...state.news, newsItem],
            }
        }
        case NewsReducerEnum.CHANGE_NEWS_TEXT: {
            return {
                ...state,
                news: state.news.map(m => m.id === action.payload.id ? {...m, text: action.payload.text} : m)
            }
        }
        case NewsReducerEnum.CHANGE_NEWS_TITLE: {
            return {
                ...state,
                news: state.news.map(m => m.id === action.payload.id ? {...m, title: action.payload.title} : m)
            }
        }
        case NewsReducerEnum.DELETE_NEWS: {
            return {
            ...state,
                news: state.news.filter(f => f.id !== action.payload.id)
            }
        }
        default:
            return state
    }
}

export const NewsActions = {
    addNews: (newTitle: string) => {
        return {
            type: NewsReducerEnum.ADD_NEWS,
            payload: {
                newTitle
            }
        } as const
    },
    changeNewsText: (id: string, text: string) => {
        return {
            type: NewsReducerEnum.CHANGE_NEWS_TEXT,
            payload: {
                id,
                text,
            }
        } as const
    },
    changeNewsTitle: (id: string, title: string) => {
        return {
            type: NewsReducerEnum.CHANGE_NEWS_TITLE,
            payload: {
                id,
                title,
            }
        } as const
    },
    deleteNews: (id: string) => {
        return {
            type: NewsReducerEnum.DELETE_NEWS,
            payload: {
                id,
            }
        } as const
    },
}

//types
export type initialStateType = typeof initialState

type ActionNewsTypes = InferActionTypes<typeof NewsActions>

export type NewsType = {
    id: string
    image: string
    text: string
    title: string
}
