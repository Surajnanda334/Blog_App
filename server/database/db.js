import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-idbsngt-shard-00-00.eap4u7n.mongodb.net:27017,ac-idbsngt-shard-00-01.eap4u7n.mongodb.net:27017,ac-idbsngt-shard-00-02.eap4u7n.mongodb.net:27017/?ssl=true&replicaSet=atlas-3yvmym-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("error while connecting with the database", error);
    }
}

export default Connection;