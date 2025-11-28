import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldOut: SoldOut
        inventory: Int
        stores: [Store]!
    }

    enum SoldOut {
        SOLD_OUT
        ON_SALE
    }

    type Store {
        store: String
    }

    type Query {
        getProduct(id: ID!): Product
        getAllProducts: [Product]
    }
    
    input StoreInput {
        store: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldOut: SoldOut
        inventory: Int
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(input: ProductInput): Product
        deleteProduct(id: ID!): String
    }

`);

export default schema;