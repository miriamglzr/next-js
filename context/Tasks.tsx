import { createContext, ReactNode, useContext, useState } from "react";

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
	const onTaskCreated = (task: Task) => {
		setTasks([...tasks, task]);
	};

	return (
		<AppCtx.Provider value={{ tasks, onTaskCreated }}>
			{children}
		</AppCtx.Provider>
	);
};

export const useAppCtx = () => useContext(AppCtx);
