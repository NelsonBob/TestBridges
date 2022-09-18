const express = require('express');
const router = express.Router();
const { authJwt } = require('../middleware')
const auth = require('../controller/auth');
const AccountCtrl = require('../controller/account');
const TransactionCtrl = require('../controller/transaction');
//login
router.post('/login', auth.login)
router.post('/signup', auth.signup)

router.get('/accounts', [authJwt.verifyToken], AccountCtrl.getAccount);
router.get('/accounts/:acc_number/transactions', [authJwt.verifyToken], TransactionCtrl.getTransaction);
module.exports = router
