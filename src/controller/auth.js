const User = require('../model/user')
const config = require('../config/authJwt')



let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

exports.signup = (req, res) => {

    const user = new User({
        user: req.body.user,
        password: bcrypt.hashSync(req.body.password, 8),
    })

    user.save((error, user) => {
        if (error)
            return res.status(500).send({ message: error })
         return res.status(201).json({})
    
    })
}

exports.login = (req, res) => {
    User.findOne({
        user: req.body.user
    }) .exec((error, user) => {
            if (error)
                return res.status(500).json({ error })

            if (!user)
                return res.status(400).send({ message: "BAD REQUEST" })

            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            )

            if (!passwordIsValid)
                return res.status(401).send({
                    message: "UNAUTHORIZED"
                })

            let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 })

         
            return res.status(200).send({
                
                "refresh_token": token,
            })
        })

}