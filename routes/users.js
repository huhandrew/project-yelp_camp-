const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../modules/user.js');
const catchAsync = require('../utils/catchAsync');
const users = require('../controllers/users.js');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', {failureFlash: true, failureRedirect: '/login', keepSessionInfo: true})
        , users.login);

router.get('/logout', users.logout)

module.exports = router;