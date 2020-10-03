import React from "react";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import s from "./item.module.css";


const Items = () => (
    <Query
        query={gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
      body
            }
        }
    }
`}
        >
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            console.log(data)
            return data.posts.data.map(({id, title, body}) => (
                    <div key={id} className={s.item}>
                        <img src="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg" alt=""/>
                        <h3>!!!!{title}</h3>
                        <p>!!!!{body}</p>
                    </div>
                )
            )
        }}
    </Query>
)
export default Items;
