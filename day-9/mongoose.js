const Mongoose = require('mongoose');

const connection = Mongoose.connect('mongodb://127.0.0.1:27017/imdb');

const MovieSchema=Mongoose.Schema({
    title:String,
    Rating:Number,
    Price:Number,
    contry:String

})

const Moviemodel=Mongoose.model('allmovie',MovieSchema);



module.exports={connection,Moviemodel}