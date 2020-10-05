import gql from "graphql-tag";

export const getAllPosts = gql`
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
