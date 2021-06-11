const Assign = require('../models/assingM')
const Ticket = require('../models/ticketM')
const jwt = require('jsonwebtoken')


exports.assignTicket = async (req, res) => {
    try {
        const { technician } = req.body
        const { id } = req.params
        const idticket = await Ticket.findOne({_id : id})
        const assignedTicket = new Assign({
            id_technician : technician,
            id_ticket: idticket._id
        })
        const etatTicket = await Ticket.findByIdAndUpdate({_id : id}, {etat : 'Affecte'}) 
        console.log("save",assignedTicket)
        const assignSave = await assignedTicket.save()
        res.status(201).json({message : "The Ticket Assigned", assignSave}) 
    } catch (error) {
        res.status(500).json(500)
    }
}


exports.getTicketTechnician = async (req, res) => {
    try {
        const token = req.cookies.user_jwt
        let id_user;
        if(token){
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
                id_user = decodedToken.id
                return id_user
        })}
    const ticketTichnician = await Assign.find({id_technician : id_user}).populate('id_ticket', 'title ticket_type urgence etat description ')
        console.log(ticketTichnician)
        res.status(201).json(ticketTichnician)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.refuseTicket = async (req, res) => {
    try {
        const refuse = await Ticket.findByIdAndUpdate({_id : req.params.id}, {etat : 'Reaffecte'})
        res.status(200).json({message : 'Ticket refuse !'})
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.acceptTicket = async (req, res) => {
    try {
        const accept = await Ticket.findByIdAndUpdate({_id : req.params.id}, {etat : 'Cloture'})
        res.status(200).json({message : 'Ticket accepted !'})
    } catch (error) {
        res.status(500).json(error)
    }
}

