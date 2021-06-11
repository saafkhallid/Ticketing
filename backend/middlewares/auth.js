const jwt = require('jsonwebtoken')
const { findById } = require('../models/userModdel')
const Users = require ('../models/userModdel')

// For backend routes
exports.auth = (req, res, next) => {
    const token = req.cookies.user_jwt
    try {
        if(!token) return res.status(400).json({msg: "invalid Authentication"})

        jwt.verify(token, process.env.JWT_SECRET, (err, decoedToken) => {
            if(err) throw err
            next()
        })
    }
    catch (err) {
        return res.status(500).json({msg: err.message})
    }

}


// For Frntend  routes
exports.clientAuth = (req, res) => {
    const token = req.cookies.user_jwt
    try {
        if(!token) return res.json({isAuth: false, role: ''})

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoedToken) => {
            if(err) throw err
            const role = await Users.findById(decoedToken.id).select('role -_id')
            return res.status(200).json({isAuth: true, role: role})
        })
    }
    catch (err) {
        return res.status(500).json({msg: err.message})
    }

}


