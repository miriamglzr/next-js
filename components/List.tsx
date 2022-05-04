import React from "react";
import Link from "next/link";
import { useAppCtx } from "../context/Tasks";
import { Task } from "../context/Tasks";

function List({
	taskIds,
}: {
	taskIds?: Task[];
	setTasks?: (tasks: Task[]) => void;
}) {
	const tasksContext = useAppCtx();

	console.log(taskIds);
	return (
		<ul>
			{tasksContext?.tasks.map((task, i) => {
				return (
					<li key={i + task.name}>
						<Link href={`/todo-item/${task.id}`}>
							<a>{task.name}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default List;
