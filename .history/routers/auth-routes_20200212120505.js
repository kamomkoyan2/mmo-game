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
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors:errors.array(),
                    message:'incorrect data in SignIn'
                })
            }

            const (email,password) = req.body()
            const condidate = await User.findOne({email})
            if (condidate) {
                res.status(400).json({message:'User in the database'})
            }
            const hashedPassword = await bcrypt.hash(password,12)
            const user = new User
        }
    }
)


module.exports = router;