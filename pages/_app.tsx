import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppCtxProvider } from "../context/Tasks";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppCtxProvider>
			<Component {...pageProps} />
		</AppCtxProvider>
	);
}

export default MyApp;
