const mongoose = require('mongoose');
const productSchema = require('./products')

 mongoose.connect('mongodb://localhost:27017/shopping',{
    useNewUrlParser:true,useCreateIndex:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.once('open', ()=>{
    console.log("Successfully connected to Database");
});


const Products = mongoose.model('products',productSchema);


module.exports = {
    Products
}