const mongoose =  require("mongoose")
const regSchema =new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    password:String
})
module.exports = mongoose.model("user",regSchema)