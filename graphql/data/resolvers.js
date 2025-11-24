class Product {
  constructor(id, {name, description, price, soldOut, inventory, stores}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldOut = soldOut;
    this.inventory = inventory;
    this.stores = stores;
  }
}

const productDatabase = {};

const resolvers = {
    getProduct: ({id}) => {
        return new Product(id, productDatabase[id])
    },
    getAllProducts: () => {
      return Object.keys(productDatabase).map(id => new Product(id, productDatabase[id]));
    },
    createProduct: ({input}) => {
      let id = require('crypto').randomBytes(10).toString('hex');
      productDatabase[id] = input;
      return new Product(id, input);
    }   
}

export default resolvers;
