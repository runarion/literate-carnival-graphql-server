import mongoose from "mongoose";

async function connectMongo() {
    try {
        await mongoose.connect('mongodb://localhost:27017/widgets');
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

connectMongo();

const widgetSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    soldOut: String,
    inventory: Number,
    stores: Array,
});

const Widgets = mongoose.model('Widget', widgetSchema);

export { Widgets };