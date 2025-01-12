const express = require('express');
const User = require('./models/User')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find({}).sort('firstName')
       res.json(users).send()
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: e.message })
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = req.body
        await User.create(newUser)
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: e.message })
    }
});

module.exports = router;