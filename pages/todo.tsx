import React from "react";
import fakeDb from "../fakeDb.json";
import { GetStaticProps } from "next";
import { Task } from "../context/Tasks";

function todo({ taskIds }: { taskIds: Task[] }) {
	console.log(taskIds);
	return (
		<div>
			{taskIds.map((task, i) => {
				return <div key={i}>{task.name}</div>;
			})}
		</div>
	);
}

export default todo;

export const getStaticProps: GetStaticProps = async () => {
	const data = fakeDb;

	return {
		props: {
			taskIds: data,
		},
	};
};
