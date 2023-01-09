//CSS
import '@uniswap/widgets/fonts.css'
import '../styles/index.scss'

import type {AppProps} from 'next/app'
import {Web3OnboardProvider} from '@web3-onboard/react'

// Components
import Layout from '../shared/layout/Layout'

// Config
import web3Onboard from '../config/walletConfig'

export default function App({Component, pageProps}: AppProps) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3OnboardProvider>
  )
}
