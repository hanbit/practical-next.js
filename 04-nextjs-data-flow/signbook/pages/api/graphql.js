import { ApolloServer, gql } from 'apollo-server-micro';
import GraphQLJSON from 'graphql-type-json';
import 'crypto';

const sign_db = []

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const typeDefs = gql`
    scalar JSON
    input InsertSign {
        nickname: String!,
        content: String!,
        country: String
    }
    type Query {
        sign(offset: Int!, limit: Int!, order_by: JSON): [Sign]!,
    }
    type Mutation {
        insert_sign(objects: InsertSign): NewSign,
    }
    type NewSign {
        returning: Sign,
    }
    type Sign {
        uuid: ID,
        created_at: String
        content: String,
        nickname: String,
        country: String
    }
`;

const resolvers = {
    Query: {
        sign(_, args) {
            const variable = JSON.parse(JSON.stringify(args));
            const offset = variable.offset;
            const limit = variable.limit;
            const order_by = variable.order_by.created_at;
            const sort_func = order_by.created_at === 'desc'
                ? (a, b) => Number(a.created_at) - Number(b.created_at)
                : (a, b) => Number(b.created_at) - Number(a.created_at)
            const signlist = sign_db.sort(sort_func).slice(offset, offset+limit)
            return signlist
        },
    },
    Mutation: {
        insert_sign(_, objects) {
            const uuid = uuidv4();
            const contents = JSON.parse(JSON.stringify(objects));
            const created_at = Date.now();
            const newSign = {
                ...contents.objects,
                created_at,
                uuid,
            }
            sign_db.push(newSign);
            return {returning: newSign};
        },
    }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default async function handler(req, res) {
    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);    
}

export const config = {
    api: {
        bodyParser: false,
    },
};