//Including Mongoose model...
var mongoose = require('mongoose');
//creating object 
var Schema = mongoose.Schema;


//Schema for user
var favSchema = new Schema({

    bookid              : {type: String, required: true },
    bookname 			: {type: String, required: true },
    link				: {type: String, required: true },
    publish				: {type: String, required: true },
    author				: {type: String, required: true },
    userid				: {type: String, required: true },


});



//model for userschema
mongoose.model('fav' , favSchema);
