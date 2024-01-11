const mongoose=require ("mongoose")
const userSchema=mongoose.Schema({
    name: String,
    email:{type:String,required:true},
    number : Number,
    address : String

})


module.exports= mongoose.model("user", userSchema)