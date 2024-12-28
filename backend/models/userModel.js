const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codeIDE')

let userSchema = new mongoose.Schema({
    name : String , 
    username : String ,
    email : String ,
    password : String ,
    date :{
        type:Boolean,
        default:false
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('User',userSchema);