import React from "react"
import s from './morePage.module.css'
import ButtonBack from "../../common/components/ButtonBack/ButtonBack";


const MorePage = () => {
    return (
    <div className={s.titlePosition}>
    <div className={s.title}>Вас приветствует пустая страница!</div>
     <div className={s.title}>P.S. Окей гугл :)</div>
        <ButtonBack/>
    </div>
    )
}
export default MorePage