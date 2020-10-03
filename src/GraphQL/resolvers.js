// import {blocks} from "./db";
//
// const resolvers = {
//     Query: {
//         block: (parent, { id }, context, info) => {
//             return blocks.find(block => block.id === id);
//         },
//         blocks: (parent, args, context, info) => {
//             return blocks;
//         }
//     }
// };
//
// export default resolvers;
import { users } from "./db";

const resolvers = {
    Query: {
        user: (parent, { id }, context, info) => {
            return users.find(user => user.id === id);
        },
        users: (parent, args, context, info) => {
            return users;
        }
    }
};

export default resolvers;