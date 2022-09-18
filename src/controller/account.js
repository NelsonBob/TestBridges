const fetch = require('node-fetch');
//list all account
exports.getAccount = (req, res, next) => {
    console.log("yum")
    fetch('./myInfos.json')
    .then((response) => response.json())
    .then((json) => res.status(200).json(json.accounts))
    .catch(error => res.status(400).json({ error }))
};