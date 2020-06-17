import mongoose from "mongoose";

export const connectMongo = () => {
    mongoose.connect("mongodb+srv://project:project@cluster0-191bi.mongodb.net/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Поключились к БД')
};
