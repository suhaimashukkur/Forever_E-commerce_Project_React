const mongoose = require('mongoose')

const ordereSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },{
        items:{

        }
    }

})