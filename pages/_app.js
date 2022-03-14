import '../styles/global.css'

export default function App({ Component, pageProps }) {

    return (
        <>
            <div>
                <h1>hello world</h1>
            </div>
            <Component {...pageProps} />
        </>
    )
}