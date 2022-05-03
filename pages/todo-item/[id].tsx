import Head from "next/head";
import Link from "next/link";
import { useAppCtx } from "../../context/Tasks";
import { useRouter } from "next/router";

type Props = {};

// `pages/posts/[id].tsx` will handle `posts/1`, `posts/2`, etc.

export default function Item({}: Props) {
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
