import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Layout from "../components/layout";
import List from "../components/List"; //this is not needed because it is imported in Input it doesn't update on input

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Layout home>
				<h4 className={styles.title}>Welcome to my first Next.js ToDo app</h4>
				<Input />

				<List />
			</Layout>
		</div>
	);
};

export default Home;
