"use client"
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Add() {
	const [todos, setTodos] = useState('')
	const router = useRouter();

	const submit = (event: any) => {
		event.preventDefault();

		fetch("/add/api", {
			body: JSON.stringify({ "name": todos }),
			method: "POST"
		}).then((response) => {
			router.push('/')
		})

	}

	useState()
	return (
		<div className="card">
			<div className="card-header d-flex justify-content-between">
				<h5>Todos List</h5>
				<Link href='/' className="btn btn-primary btn-sm">Back</Link>
			</div>
			<div className="card-body">
				<form onSubmit={submit}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Todo</label>
						<input type="text" className="form-control" id="name" value={todos} onChange={(event) => setTodos(event.target.value)} required placeholder="Enter Todo..." />
					</div>
					<button className="btn btn-primary">Add Todo</button>
				</form>
			</div>
		</div>
	);
}
