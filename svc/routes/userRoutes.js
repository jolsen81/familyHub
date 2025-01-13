const express = require('express');
const User = require('./models/User')
const {ObjectId} = require("bson")
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find({}).sort('firstName')
       res.json(users)
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

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params
        await User.deleteOne({_id: new ObjectId(id)})
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: e.message })
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params
        const updatedUser = req.body
        await User.updateOne({_id: new ObjectId(id)}, updatedUser)
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: e.message })
    }
});

module.exports = router;