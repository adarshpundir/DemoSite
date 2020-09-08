const mongoose=require('mongoose')

const Schema=mongoose.Schema

const userSchema= new Schema(
    {
        username:String,
        email:String,
        password:String,
        Phoneno:String
}
);
module.exports = mongoose.model('adarshdatabase',userSchema,'useradarsh')

