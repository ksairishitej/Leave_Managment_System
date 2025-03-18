const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://leavemng:root@cluster0.yyjmb.mongodb.net/leavemng_mern?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ MongoDB Connected Successfully");
        const fetched = mongoose.connection.db.collection("leaverequests");
        const data=await fetched.find({}).toArray();
        global.leaverequests=data
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};
module.exports = mongoDB;
