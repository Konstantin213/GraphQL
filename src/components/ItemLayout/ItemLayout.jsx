import React from "react";
import {Query} from "react-apollo";
import {getAllPosts} from "../../api/GraphQL/Query/GetAllPosts";
import Item from "./components/Item/Item";

const ItemLayout = () => {

    const renderList = ({loading, error, data}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        const renderItem = ({id, title, body}) => (
            <Item
                key={id}
                id={id}
                title={title}
                body={body}
            />
        )

        return data.posts.data.map(renderItem);
    }
    return (
        <Query
            query={getAllPosts}
        >
            {renderList}
        </Query>
    );
}
export default ItemLayout;
