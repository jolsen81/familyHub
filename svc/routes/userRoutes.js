const express = require('express');
const User = require('./models/User')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        console.log(users)
        res.json(users)
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: e.message })
    }
});

module.exports = router;