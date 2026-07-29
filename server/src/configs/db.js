const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGODB_URI); // Debug log
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit the process if unable to connect
    }
};

module.exports = connect;
