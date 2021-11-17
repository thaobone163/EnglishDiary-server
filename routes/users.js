const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const router = express.Router();

const Account = require('../models/account');

const userData = {};

// let refreshTokens = [];
const accessTokenSecret = 'random';
// const refreshTokenSecret = 'refresh';

router.use(bodyParser.json());

router.post('/login', (req, res) => {
    console.log(req.body)
    const {tendangnhap, matkhau} = req.body;
    console.log(tendangnhap, matkhau);
    console.log('ok1' + userData);

    Account.findByUsername(tendangnhap, (err, userData) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Account with username ${req.params.tendangnhap}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Account with username " + req.params.tendangnhap
                });
            }
        } else {
            if (userData.tendangnhap === tendangnhap && userData.matkhau === matkhau) {
                // generate an access token
                // const accessToken = jwt.sign({
                //     tendangnhap: userData.tendangnhap,
                //     ID_tk: userData.ID_tk
                // }, accessTokenSecret, {expiresIn: '2000'});
                // const refreshToken = jwt.sign({
                //     tendangnhap: userData.tendangnhap,
                //     ID_tk: userData.ID_tk
                // }, refreshTokenSecret);
                //
                // refreshTokens.push(refreshToken);
                console.log(userData)

                res.json({
                    // accessToken,
                    // refreshToken,
                    "ID_tk": userData.ID_tk
                });
            } else {
                res.json('Username or password incorrect');
            }
        }
    })

})

// router.post('/token', (req, res) => {
//     const {token} = req.body;
//
//     if (!token) {
//         return res.sendStatus(401);
//     }
//
//     if (!refreshTokens.includes(token)) {
//         return res.sendStatus(403);
//     }
//
//     jwt.verify(token, refreshTokenSecret, (err, user) => {
//         if (err) {
//             return res.sendStatus(403);
//         }
//
//         const accessToken = jwt.sign({
//                 tendangnhap: user.tendangnhap
//             }, accessTokenSecret,
//             {expiresIn: '2000'});
//
//         res.json({
//             accessToken
//         });
//     });
// });

// router.post('/logout', (req, res) => {
//     const {tokenThis} = req.body;
//     refreshTokens = refreshTokens.filter(token => tokenThis !== token);
//     res.send("Logout successful");
// });

module.exports = router;
