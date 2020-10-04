import gql from "graphql-tag";

export const GetAllPosts = gql`
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
`;
