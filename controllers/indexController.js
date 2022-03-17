const { Products } = require('../model');
const products = require('../utils/products');


const indexController = {
    index:async (req,res) =>{
        var productsData = [];
        try {
            products.forEach(product => {
                const newProducts = Products.create(product);
                productsData.push(newProducts);
            });
    
        } catch (error) {
            console.log(error);
        }
        res.json(productsData);
    },
    allProducts:async (req,res) =>{
        try{
            const allProducts = await Products.find({});
            res.status(200).send(allProducts);
        }catch(error){
            res.status(400).send(error);
        }
    },



    home:(req,res) =>{
        res.send('hello form backedn..')
    }
}
module.exports = indexController