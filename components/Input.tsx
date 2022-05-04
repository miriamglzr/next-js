import React, { SyntheticEvent } from "react";
import { useAppCtx } from "../context/Tasks";

type Task = {
	id: number;
	name: string;
};

function Input() {
	const tasksContext = useAppCtx();

	function handleSubmit(event: SyntheticEvent) {
		event.preventDefault();

		if (typeof window === "object") {
			const input = document.getElementById("task") as HTMLInputElement | null;
			console.log(input?.value);
			if (tasksContext) {
				let number = tasksContext.tasks.length ?? 0; // same as || 0;
				let newTask: Task = {
					id: number + 1,
					name: input?.value ?? "",
				};
				tasksContext.onTaskCreated(newTask);
			}
			if (input) {
				input.value = "";
			}
		}
	}
	return (
		<form onSubmit={handleSubmit} id="form">
			<input type="text" placeholder="Add a Task" name="task" id="task" />
		</form>
	);
}

export default Input;
