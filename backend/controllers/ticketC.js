const Ticket = require('../models/ticketM')
const jwt = require('jsonwebtoken')


exports.createTicket = async (req, res) => {
    try {
        const token = req.cookies.user_jwt
        let id_user;
        if(token){
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
                id_user = decodedToken.id
                return id_user
        })}
        const {title, ticket_type,  urgence, description, etat  } = req.body
    
        const ticket = new Ticket({
            title, 
            ticket_type, 
            urgence, 
            description,
            etat , 
            id_user: id_user
        })
        const saveTicket = await ticket.save()
        res.status(200).json({message:"Ticket has been created",  saveTicket})
    } catch (error) {
        res.status(500).json(error)
    }


}

exports.allTicketUser = async (req, res) => {
    try {
        const token = req.cookies.user_jwt
        let user;
        if(token){
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
                user = decodedToken.id
                return user
        })}
        const allTicket = await Ticket.find({id_user : user}) 
        res.status(201).json(allTicket)
        console.log(allTicket)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteTicket = async (req, res) => {
    try {
        const deleteTicket = await Ticket.findByIdAndRemove(req.params.id)
        res.status(200).json({message : 'Ticket deleted successfully !'})
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllTicket = async (req, res) => {
    try {
        // const allTicket = await Ticket.find( { $or: [ { 'etat': 'Affecte' }, { 'etat': 'Non_Affecte' },{ 'etat': 'Reaffecte' } ] } ).sort({created_at: -1})
        const allTicket = await Ticket.find( ).sort({created_at: -1})
        res.status(200).json(allTicket)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.infosTicket = async (req, res) => {
    const {id} = req.params
   
    try {
        const infoTicket = await Ticket.findById({_id : id })
        // console.log(infoTicket)
        res.status(201).json(infoTicket)
    } catch (error) {
        res.status(500).json(error)
    }
}
