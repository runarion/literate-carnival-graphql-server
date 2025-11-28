# 🎉 Literate Carnival GraphQL Server

A simple GraphQL server implementation using Express and GraphQL, featuring a product catalog API with queries and mutations.

## Features

- **GraphQL API** with queries and mutations
- **Express.js** server with GraphiQL interface
- **Hot reload** with nodemon
- **ES6+ support** via Babel
- Product catalog with CRUD operations

## GraphQL Schema

The server implements a product catalog with the following capabilities:

### Queries

- `getProduct(id: ID!)` - Fetch a single product by ID
- `getAllProducts` - Retrieve all products

### Mutations

- `createProduct(input: ProductInput)` - Create a new product

### Types

- **Product**: Includes id, name, description, price, soldOut status, inventory, and store locations
- **SoldOut**: Enum for product availability (SOLD_OUT, ON_SALE)
- **Store**: Store location information

## Setup

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/runarion/literate-carnival-graphql-server.git
cd literate-carnival-graphql-server
```

2. Install dependencies:

```bash
npm install
```

Or install them manually:

```bash
npm install express express-graphql nodemon
npm install --save-dev @babel/cli @babel/core @babel/node @babel/preset-env
```

## Running the Server

Start the development server with hot reload:

```bash
npm start
```

The server will start on `http://localhost:8080`

- **GraphiQL Interface**: <http://localhost:8080/graphql>
- **Root endpoint**: <http://localhost:8080/>

## Example Usage

### Create a Product

```graphql
mutation {
  createProduct(input: {
    name: "Laptop"
    description: "High-performance laptop"
    price: 999.99
    soldOut: ON_SALE
    inventory: 50
    stores: [
      { store: "Store A" }
      { store: "Store B" }
    ]
  }) {
    id
    name
    price
    inventory
  }
}
```

### Query All Products

```graphql
query {
  getAllProducts {
    id
    name
    description
    price
    soldOut
    inventory
    stores {
      store
    }
  }
}
```

### Query Single Product

```graphql
query {
  getProduct(id: "your-product-id") {
    id
    name
    description
    price
    soldOut
    inventory
    stores {
      store
    }
  }
}
```

## Project Structure

```text
graphql/
├── index.js           # Main server file
├── package.json       # Project dependencies and scripts
├── .babelrc          # Babel configuration
└── data/
    ├── schema.js      # GraphQL schema definition
    └── resolvers.js   # GraphQL resolvers
```

## Technologies Used

- **Express** - Web framework for Node.js
- **express-graphql** - GraphQL HTTP server middleware
- **GraphQL** - Query language for APIs
- **Babel** - JavaScript compiler for ES6+ features
- **nodemon** - Development tool for auto-restarting the server

## License

ISC

## Author

runarion

## Notes


### Port availability

If you encounter issues starting the server, check if port 8080 is already in use:

```bash
lsof -ti:8080
```

If it returns a process ID.
Kill it with:

```bash
kill -9 $(lsof -ti:8080)
```

This will free up the port for the GraphQL server to start successfully.

### MongDB Service

Verify MongoDB is running.

```bash
brew services list | grep mongodb
```

It should show `started` status. If not, start it with:

```bash
brew services start mongodb-community
```

To stop the service later, use:

```bash
brew services stop mongodb-community
```
