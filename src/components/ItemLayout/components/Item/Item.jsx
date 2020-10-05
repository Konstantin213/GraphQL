import React from "react";
import {useHistory} from "react-router-dom";
import s from "./item.module.css";
import {imageUrl} from "../../../../api/Api";

const Item = (props) => {

    const {id, title, body} = props;

    const history = useHistory();

    const goToDetail = (id) => history.push(`/detail/${id}`);

    return (
        <div
            key={id}
            className={s.item}
            onClick={() => goToDetail(id)}
        >
            <img src={imageUrl} alt="Загрузка"/>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Item;

