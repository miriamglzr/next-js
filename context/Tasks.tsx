import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import useSWR from "swr";

export type Task = {
	id: number;
	name: string;
};

export type AppContextInterface = {
	tasks: Task[];
	onTaskCreated: (task: Task) => void;
};

const AppCtx = createContext<AppContextInterface | null>(null);

export const AppCtxProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const onTaskCreated = async (task: Task) => {
		setTasks([...tasks, task]);

		const url = `/api/tasks`;
		const data = await axios.post(url, task);
		setTasks(data.data);
	};

	const fetcher = async (url: string) => await axios.get(url);

	const url = `/api/tasks`;

	const { data } = useSWR(url, fetcher);
	console.log(data?.data);
	// setTasks(data?.data);

	return (
		<AppCtx.Provider value={{ tasks: tasks ?? data?.data, onTaskCreated }}>
			{children}
		</AppCtx.Provider>
	);
};

export const useAppCtx = () => useContext(AppCtx);
