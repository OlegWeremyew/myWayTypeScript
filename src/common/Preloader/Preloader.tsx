import React from 'react';
import style from "./Preloader.module.scss";
import preloader from "../../assets/images/preloader.gif";
import {ReturnComponentType} from "../../types/ReturnComponentType";

export const Preloader = (): ReturnComponentType => {
    return (
        <div>
            <img src={preloader} className={style.preloader} alt="preloader"/>
        </div>
    )
}
