import { createContext, ReactNode, useContext, useState } from "react";

type Task = {
	id: number;
	name: string;
};

export type AppContextInterface = {
	tasks: Task[];
	//setTasks?: (tasks: Task[]) => void;
};

const AppCtx = createContext<AppContextInterface | null>(null);

export const sampleAppContext: AppContextInterface = {
	tasks: [{ id: 1, name: "Example: Study Typescript" }],
};

export const AppCtxProvider = ({ children }: { children: ReactNode }) => {
	// const [tasks, setTasks] = useState<AppContextInterface[] | null>(null);
	//value={tasks}
	return <AppCtx.Provider value={sampleAppContext}>{children}</AppCtx.Provider>;
};

export const useAppCtx = () => useContext(AppCtx);
