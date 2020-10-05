import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api'
});

export default client;

export const imageUrl = "https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg";

