<<<<<<< HEAD
import mongoose from 'mongoose';

const url = process.env.MONGO_URI;

mongoose.connect(url)
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log(err);
});
=======
import mongoose from 'mongoose';

const url ="mongodb://localhost:27017/HappySoul";

mongoose.connect(url);

console.log("Database connected successfully");
>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
