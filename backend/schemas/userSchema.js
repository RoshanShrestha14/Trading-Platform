const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");



const userSchema = new Schema({
    email:{
        type:String,
        require:[true,"your email address is required"],
        unique:true,

    },
    username:{
        type:String,
        require:[true,"your usename is required"]
    },

    password:{
        type:String,
        require:[true,"your password is required"],

    }
});


userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = {userSchema};