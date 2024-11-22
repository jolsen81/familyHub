const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
const baseRoutes = require('./routes/baseRoutes')

app.use(cors());
app.use(express.json());

app.use('/', baseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});