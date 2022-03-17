
const productSchema =  {
    brand: {type:String,required:true},
    Gender:{type:String,required:true},
    Category: {type:String,required:true},
    Title: {type:String,required:true},
    Description:{type:String,required:true},
    price:{type:Number,required:true},
    discount: {type:Number,required:true},
    img: {type:Object,required:true},
    Size: {type:Array,required:true},
    Colors: {type:Array,required:true},
}

module.exports = productSchema