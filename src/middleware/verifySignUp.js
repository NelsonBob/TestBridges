const User = require('../model/user')


checkDuplicateUser = (req, res, next) => {
    User.findOne({
        user: req.body.user
    }).exec((err, user) => {
        if (err)
            return res.status(500).send({ message: err })

        if (user)
            return res.status(400).send({ message: "Failed! User is already in use!" })
    })

}


const verifySignUp = {
    checkDuplicateUser
}

module.exports = verifySignUp