const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        const user = process.env.DB_USERNAME
        const pass = process.env.DB_PASSWORD
        const port = process.env.DB_PORT
        const databaseName = process.env.DATABASE_NAME
        const databaseServer = process.env.DATABASE_SERVER
        const mongoURI = `mongodb://${user}:${pass}@${databaseServer}:${port}/${databaseName}?authSource=admin` || 'mongodb://admin:pass@mongo:27017/mydatabase';
        console.log(`connecting to URI ${mongoURI}`)
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectToDatabase;
