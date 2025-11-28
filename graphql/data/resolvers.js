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
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldOut: input.soldOut,
            inventory: input.inventory,
            stores: input.stores,
        });

        newWidget.id = newWidget._id;
    
        try {
            await newWidget.save();
            return newWidget;
        } catch (error) {
            throw new Error("Error creating product: " + error.message);
        }
    },

    updateProduct: async ({input}) => {
        try {
            const updatedWidget = await Widgets.findOneAndUpdate(
                {_id: input.id}, input, {new: true}
            );
            return updatedWidget;
        } catch (error) {
            throw new Error("Error updating product: " + error.message);
        }
    },

    deleteProduct: async ({id}) => {
        try {
            await Widgets.deleteOne({_id: id});
            return "Successfully deleted product with id: " + id;
        } catch (error) {
            throw new Error("Error deleting product: " + error.message);
        }
    }
};

export default resolvers;
