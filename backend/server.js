const app = require("./app")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
const PORT = process.env.PORT || PORT

app.listen(PORT,()=>{
    console.log(`app listening at http://localhost:${PORT}`)
})