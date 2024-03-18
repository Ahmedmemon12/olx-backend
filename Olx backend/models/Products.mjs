import mongoose from "mongoose";
const { Schema } = mongoose;


const productsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: [{
        type : Number
    }],
    images: [{
        type: String
    }]

})

const Products = mongoose.model('products', productsSchema)

export default Products