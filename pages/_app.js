import React from 'react';
import Layout from '../components/layout'
import 'styles/globals.css'
import { Sora } from '@next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"


const sora = Sora({ subsets: ['latin'] })
console.log(sora)

function App({ Component, pageProps }) {
    return(
        <div className={sora.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default App;