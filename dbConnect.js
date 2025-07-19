import mongoose from "mongoose";

async function pool() {
    try {
        await mongoose.connect('mongodb+srv://admin:123@walberstore.35fjflj.mongodb.net/', {useNewUrlParser: true, useUnifiedTopology: true});
        return mongoose.connection;
    } catch (error) {
        console.log(error);
    }
}

export default pool;