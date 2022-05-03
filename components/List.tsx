import React from "react";
import Link from "next/link";
import { useAppCtx } from "../context/Tasks";

type Props = {};

function List({}: Props) {
	const tasksContext = useAppCtx();
	// const { tasks } = tasksContext // cannot deconstruct
	console.log(tasksContext?.tasks);
	return (
		<ul>
			{tasksContext?.tasks.map((task, i) => {
				return (
					<li>
						<Link href={`/todo-item/${task.id}`} key={i + task.name}>
							<a>{task.name}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default List;
