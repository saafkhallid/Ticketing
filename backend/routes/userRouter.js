const express = require ('express')
const router = express.Router()
const { register, login, logout, getTechnician } = require('../controllers/userCtrl')
const { createTicket, getAllTicket, deleteTicket, infosTicket, allTicketUser } = require('../controllers/ticketC')
const {assignTicket,  refuseTicket, acceptTicket, getTicketTechnician } = require('../controllers/assignC')

const { admin, getallUser } = require('../controllers/adminCtrl')
const { auth }=require('../middlewares/auth')



//register user 
router.post('/register', register)

//login User 
router.post('/login', login)

//login User 
router.get('/admin', auth, admin)

// assign a ticket to a technician // refuse ticket // get the ticket assigned to technician
router.post('/assigned/:id', assignTicket)

router.get('/get-tichnician', getTechnician)

router.get('/ticketTichnician', getTicketTechnician)

router.put('/refuse/:id', refuseTicket)

router.put('/accept/:id', acceptTicket)


// ticket user
router.post('/addTicket', createTicket)

//get alluser 
router.get('/alluser', getallUser)
// get all ticket of user
router.get('/allTicketUser', allTicketUser )
// get all ticket of all users
router.get('/allTicket', getAllTicket)

router.get('/infoTicket/:id', infosTicket)

router.delete('/deleteTicket/:id', deleteTicket)


//logout
router.get('/logout', logout)  


module.exports = router