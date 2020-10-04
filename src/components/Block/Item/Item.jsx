import React from "react";
import {Query} from "react-apollo";
import s from "./item.module.css";
import {GetAllPosts} from "../../../api/GraphQL/Query/GetAllPosts";
import {image} from "../../../api/Api";


const Items = () => (
    <Query
        query={GetAllPosts}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data ? (
                    data.posts.data.map(({id, title, body}) => (
                            <div key={id} className={s.item}>
                                <img src={image} alt="Загрузка"/>
                                <h3>!!!!{title}</h3>
                                <p>!!!!{body}</p>
                            </div>
                        )
                    )
                )
                : 'Ошибка'
        }}
    </Query>
)
export default Items;
