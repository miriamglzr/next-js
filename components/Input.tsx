import React, { SyntheticEvent, useState } from "react";

import List from "./List";
import { useAppCtx } from "../context/Tasks";

type Props = {};

type Task = {
	id: number;
	name: string;
};

function Input({}: Props) {
	const [tasks, setTasks] = useState<Task[] | null>(null);
	const tasksContext = useAppCtx();

	function handleSubmit(event: SyntheticEvent) {
		event.preventDefault();
		console.log("submit");
		if (typeof window === "object") {
			const input = document.getElementById("task") as HTMLInputElement | null;
			console.log(input?.value);
			if (tasksContext) {
				let number = tasksContext.tasks.length ?? 0; // same as || 0;
				let newTask: Task = {
					id: number + 1,
					name: input?.value ?? "",
				};
				console.log(newTask);
				setTasks([...(tasks ?? []), newTask]); // ask why it doesnt work without this function
				//console.log(tasks);

				tasksContext.tasks = [...(tasksContext.tasks ?? []), newTask];
			}
			if (input) {
				input.value = "";
			}
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit} id="form">
				<input type="text" placeholder="Add a Task" name="task" id="task" />
			</form>

			<List />
		</div>
	);
}

export default Input;
