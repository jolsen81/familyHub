const express = require('express');
const Example = require('./models/Example')
const router = express.Router();

router.get('/hello', async (req, res) => {
    try {
        const items = await Example.findOne({});
        console.log(items)
        res.json(items)
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: e.message })
    }
    // res.json({ message: 'Hello from the Node.js server!' });
});

module.exports = router;