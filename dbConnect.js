import mongoose from "mongoose";
import "dotenv/config";

async function pool() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        return mongoose.connection;
    } catch (error) {
        console.log(error);
    }
}

export default pool;