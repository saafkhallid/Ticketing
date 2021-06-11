const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Ticket Schema
const ticketSchema = new Schema({
     id_user: {type: Schema.Types.ObjectId, 
         ref: 'Users'},
     title: {type: String, default: ""},
     ticket_type: {type: String,
         default: ""}, 
     description: {type: String,
         default: ""},
     urgence: {type: String,
         enum : ["Normal", "Moyen", "Urgence"],
         default: "Normal"}, 

     etat: {type:String , 
        enum :["Affecte", "Non_Affecte", "Reaffecte", "Cloture"],
        default: "Non_Affecte"},
         
     date: {type: Date,
          default: Date.now}
},
{ 
     versionKey: false
})


module.exports = mongoose.model('Ticket', ticketSchema)