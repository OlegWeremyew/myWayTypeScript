import React, {useState, KeyboardEvent} from 'react';
import style from './AddMessageForm.module.css'
import {useDispatch, useSelector} from "react-redux";

import {ReadyStatusType} from "../../../../Api/chatApi/types";
import {ReturnComponentType} from "../../../../types/ReturnComponentType";
import {EMPTY_STRING} from "../../../../constants";
import {getChatStatusSelector} from "../../../../selectors";
import {sendMessage} from "../../../../redux/chatReducer";

export const AddMessageForm: React.FC = (): ReturnComponentType => {

    const dispatch = useDispatch()

    const [message, setMessage] = useState<string>(EMPTY_STRING)

    const status: ReadyStatusType = useSelector(getChatStatusSelector)

    const sendMessageHandler = (): void => {
        if (!message.trim()) return
        dispatch(sendMessage(message))
        setMessage(EMPTY_STRING)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (e.key === "Enter") {
            dispatch(sendMessage(message))
            setMessage(EMPTY_STRING)
        }
    }

    const addMessageText = (e: string): void => {
        setMessage(e)
    }

    return (
        <div>
            <textarea
                className={style.textarea}
                placeholder={"write your message ✉"}
                value={message}
                onChange={(e) => addMessageText(e.currentTarget.value)}
                onKeyPress={onKeyPressHandler}
            />
            <div className={style.form__btn} onClick={sendMessageHandler}>
                <button disabled={status !== 'ready'}>
                    Send
                </button>
            </div>
        </div>
    )
}
