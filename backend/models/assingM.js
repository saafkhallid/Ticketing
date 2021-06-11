const mongoose = require('mongoose')
const Schema = mongoose.Schema

let assignSchema = new Schema({
   
     id_technician: {type: Schema.Types.ObjectId, 
         ref: 'Users'},
     id_ticket: {type: Schema.Types.ObjectId, 
          ref: 'Ticket'},
    date: {type: Date,
      default: Date.now},
    is_accepted: {type: Boolean,
      default: null},
},
{ 
    versionKey: false
})


module.exports = mongoose.model('Assign', assignSchema)