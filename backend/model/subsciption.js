const mongoose = require("mongoose")
const subSchema = new mongoose.Schema({
    email:{
        type:String,
        required: [true, "Email is required"],
    }
})
module.exports = mongoose.model("subscription",subSchema)