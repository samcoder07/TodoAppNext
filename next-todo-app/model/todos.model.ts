import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
})

const todosModel = mongoose.model("Todos", todosSchema)

export default mongoose.models.Todos || todosModel;