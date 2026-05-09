import mongoose from 'mongoose';

const url = process.env.MONGO_URI;

mongoose.connect(url)
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log(err);
});