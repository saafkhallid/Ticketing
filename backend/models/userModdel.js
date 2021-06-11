const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({


    
    username: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },

    email: {
        type: String,
        maxlength: 100,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number, default: 0
    },

    role: {
        type: String,
        enum: ["user", "admin", "technicien"],
        default: "user"
      },

     department:{
          type: String, 
      }


},
{
    versionKey: false
})

module.exports = mongoose.model('Users', userSchema)