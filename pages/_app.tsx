import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GetStaticProps } from 'next'
import {AppCtxProvider} from '../context/Tasks';
//import '../utils/antDesignStyles.less';

function MyApp({ Component, pageProps }: AppProps, { taskIds }: { taskIds: number[] }) {
  return <AppCtxProvider><Component {...pageProps} /></AppCtxProvider>
}

export default MyApp


export const getStaticProps: GetStaticProps = async (context) => {
  // this function runs on build time
  // TODO: Fetch data
  return {
    props: {
      taskIds: ['hello', 'world'],
    },
    revalidate: 10, // Regenerate at most every 10 seconds (Incremental Static Regeneration)
  }}