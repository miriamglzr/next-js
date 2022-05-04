import React from "react";
import Link from "next/link";
import { useAppCtx } from "../context/Tasks";

function List() {
	const tasksContext = useAppCtx();

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
