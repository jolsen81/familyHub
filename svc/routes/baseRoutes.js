const express = require('express');
const Example = require('./models/Example')
const router = express.Router();

router.get('/hello', async (req, res) => {
    try {
        const items = await Example.findOne({});
        res.json(items)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
});

module.exports = router;