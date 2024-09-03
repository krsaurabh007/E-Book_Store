const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  language:{
    type:String
  },
  rating:{
    type:Number
  },
  image:{
    type:String,
  }
});
module.exports=mongoose.model('Book',BookSchema)