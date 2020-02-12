// const router = require('express').Router();
// const passport = require('passport')



// //auth login
// router.get('/App.svelte', (req,res) => {
//     res.render(login)
// })

// //auth with google
// router.get('google', passport.authenticate('google', {
//     scope:['profile']
// }))

// router.get('/google/redirect', (req,res) => {
//     res.send('you reached the calback')
// })



//api/auth/register
const {Router} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {check,validationResult} = require('express-validator');
const User = require('./models/user')
const router = Router();


router.post('/login'
    [
        check('email', 'incorrect Email').isEmail(),
        check('password', 'minheight password will be 6').isLength({min:6})
    ],

    async (req,res) => {
        try {
            console.log('body', req.body);
            const errors = validationResult(req),
            
        }
    }
)


module.exports = router;