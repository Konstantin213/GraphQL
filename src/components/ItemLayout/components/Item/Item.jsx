import React from "react";
import {Query} from "react-apollo";
import {useHistory} from "react-router-dom";
import s from "./item.module.css";
import {GetAllPosts} from "../../../../api/GraphQL/Query/GetAllPosts";
import {imageUrl} from "../../../../api/Api";


const Item = () => {
    const history = useHistory();

    const goToDetail = (id) => history.push(`/detail/${id}`);

    const renderItems = () => ({loading, error, data}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
            data.posts.data.map(({id, title, body}) => (
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
            )

        )
    }

    return <Query
        query={GetAllPosts}
    >
        {renderItems()}
    </Query>;
}

export default Item;

