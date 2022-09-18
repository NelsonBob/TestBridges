const fetch = require('node-fetch');
//list all transaction
exports.getTransaction = (req, res, next) => {
    fetch('./myInfos.json')
    .then((response) => response.json())
    .then((json) => {
        const acc_number = req.params.acc_number;
        if(acc_number in test.transactions){
            res.status(200).json(json.transactions[acc_number]);
        }else{
            res.status(404).json({message: "Le compte en paramètre n'existe pas"});
        }
    })
    .catch(error => res.status(400).json({ error }))
};