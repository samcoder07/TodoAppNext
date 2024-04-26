import mongoose from "mongoose"
export const connectDB = async () => {
	mongoose.connect("mongodb://127.0.0.1:27017/TodoAppNext").then(() => {
		console.log('database connection established');
	}).catch((error) => {
		console.log(error);
	})
}