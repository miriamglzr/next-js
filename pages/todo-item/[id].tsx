import Head from "next/head";
import Link from "next/link";
import { useAppCtx } from "../../context/Tasks";
import { useRouter } from "next/router";

// `pages/todo-item/[id].tsx` will handle `todo-item/1`, `todo-item/2`, etc.

export default function Item() {
	const router = useRouter();
	const { id } = router.query;
	const tasksContext = useAppCtx();
	let numberId = parseInt(id as string);
	const task = tasksContext?.tasks.find((t) => t.id == numberId);

	return (
		<div>
			<Head>
				<title>Task {task?.id}</title>
			</Head>
			<p>Task #: {id}</p>
			<h1>{task?.name}</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</div>
	);
}
