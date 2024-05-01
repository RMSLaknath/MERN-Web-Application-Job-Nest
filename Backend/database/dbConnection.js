import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "PF_Job_Database"
    }).then(()=>{
        console.log(`Connected to database`);
    }).catch((err)=>{
        console.log(`Error while connecting to database: ${err}`);
    });
};