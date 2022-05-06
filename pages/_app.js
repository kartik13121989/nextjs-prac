import '../styles/global.css';
// import { Provider as AuthProvider } from 'next-auth/client'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <div>
                <h1>hello world</h1>
            </div>
            <SessionProvider session={session} refetchInterval={5 * 60}
                refetchOnWindowFocus={true} >
                <Component {...pageProps} />
            </SessionProvider>
        </>
    )
}