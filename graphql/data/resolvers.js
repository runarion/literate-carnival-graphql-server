import { Widgets } from "./dbConnectors.js";

const resolvers = {
  getProduct: async ({id}) => {
    try {
      const product = await Widgets.findById(id);
      return product;
    } catch (error) {
      throw new Error("Error fetching product: " + error.message);
    }
  },

  getAllProducts: async () => {
    try {
      const products = await Widgets.find({});
      return products;
    } catch (error) {
      throw new Error("Error fetching products: " + error.message);
    }
  },

  createProduct: async ({input}) => {
    try {
      const newProduct = new Widgets(input);
      await newProduct.save();
      return newProduct;
    } catch (error) {
      throw new Error("Error creating product: " + error.message);
    }
  }   
}

export default resolvers;
