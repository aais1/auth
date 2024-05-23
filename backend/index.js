const express = require('express');
const app = express();
const mongoose=require('mongoose');
require('dotenv').config()
const User=require('./models/User')
const authRoutes=require('./routes/auth')
const cors=require('cors')

app.use(express.json())//parse json
app.use(cors());//CORS middleware

try{

mongoose.connect(process.env.MONGO_URI || "mongodb+srv://aaisali228:hGMOUkazFzcfJ3W0@cluster0.zwcf1cr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

console.log("Db connection successful")

}catch(err){
    console.log(err)
}

//to create user
// const createnew = async () => {
//     const newUser = new User({
//         username: 'aaisali228',
//         email: 'aaisali228@mail.com',
//         password: '123456'
//     });

//     await newUser.save();
// }

// createnew();

app.use('/auth',authRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
