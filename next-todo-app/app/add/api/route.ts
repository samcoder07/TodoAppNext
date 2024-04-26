import { connectDB } from "@/helper/mongodb";
import todosModel from "@/model/todos.model";
export async function POST(request: Request) {
	await connectDB();

	let body = await request.json();

	await todosModel.create({
		name: body.name,
	})

	return new Response("Add Todo Successfully")

}