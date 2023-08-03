import mongoose from "mongoose";

const connection = async (username='ritik',password='ritik') => {
    const URL=`mongodb://${username}:${password}@ac-r445v4q-shard-00-00.aflrghi.mongodb.net:27017,ac-r445v4q-shard-00-01.aflrghi.mongodb.net:27017,ac-r445v4q-shard-00-02.aflrghi.mongodb.net:27017/?ssl=true&replicaSet=atlas-1y3517-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser:true});
       console.log("Database connected Succesfully...")
    } catch(error){
        console.log("Error while connecting with database",error);
    }
}
export default connection;