const express = require("express")
const router = express.Router()
const Contact = require('./model/contact')
const Subscription = require('./model/subsciption')
const User = require("./model/signup")
const bcrypt = require("bcrypt")
router.post("/contactData", async(req,res)=>{
    try {
        const data = new Contact(req.body)
        await data.save()
        res.json({message:"message saved successflly"})
    } catch (error) {
        res.json({message:"something went worng"})
    }
})

// router.get("/getdata", async(req,res)=>{
//   try {
//     const data = await Contact.find()
//     res.json(data)
//   } catch (error) {
//     res.json({message:"something went wrong"})
//   }
// })

router.post("/subscription", async(req,res)=>{
  try {
      const data = new Subscription(req.body)
      await data.save()
      res.status(201).json({success:true,message:"subscription recieved"})
  } catch (error) {
    res.status(400).json({success:false,message:"email is required"})
  }
})

// router.get("/getemail", async (req,res) => {
//   try {
//     const data =await Subscription.find()
//   res.json(data)
//   } catch (error) {
//      res.json({error:"error"})
//   }
// })

router.post("/userData", async(req,res)=>{
  try {
     const {name,password,email,number} = req.body
    const hashedpsrd =await bcrypt.hash(password,10);
    const data = new User({name,email,number, password:hashedpsrd})
    await data.save()
    res.status(201).json({success:true, message:"Registered Successfully!"})
  } catch (error) {
    console.error(error)
    res.status(500).json({success:false,error:"Something went wrong"})
  }
})

router.post("/login", async (req,res) => {
  try {

     const{email,password}=req.body
    const matchUser= await User.findOne({email})
    if(!matchUser) return res.status(400).json({success: false,message:"User not found"})

    const matchPsrd =await bcrypt.compare(password, matchUser.password)  
    if(!matchPsrd) return res.status(400).json({success: false,message:"Incorrect Password"})

    return res.json({success:true,message:"login successfull",user: {
        email: matchUser.email,
      }}) 
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false, message:"Something went wrong!"})
  }
    
})
module.exports = router