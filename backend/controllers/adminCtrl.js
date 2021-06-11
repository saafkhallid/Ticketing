const Users = require ('../models/userModdel')
const Ticket =require('../models/ticketM')

exports.admin = (req, res) => {
    const id = '608fe562f0cc8e2d1caf6ed9'
    // const id='60bf43055c161a359c9c9298'
    Users.findById(id).then(data => {
        return res.json(data)
    })
}

exports.getallUser = async (req, res) => {
    try {
       const allUser = await Users.find()
       res.status(200).json(allUser) 
    } catch (error) {
        res.status(500).json(error)
    }
}
