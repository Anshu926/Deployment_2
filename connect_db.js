const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Removed useNewUrlParser and useUnifiedTopology
        await mongoose.connect('mongodb://localhost:27017/NewYear');
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;