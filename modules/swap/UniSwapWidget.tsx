import '@uniswap/widgets/fonts.css'

import {useConnectWallet} from '@web3-onboard/react'
import {ethers} from 'ethers'
import {useEffect, useState} from 'react'

//@ts-ignore
import {SwapWidget, Theme} from '@uniswap/widgets'

const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY

const UniSwapWidget: React.FunctionComponent<any> = (props) => {
  const [{wallet}, connect] = useConnectWallet()
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>()

  const jsonRpcUrlMap = {
    1: [`https://mainnet.infura.io/v3/${INFURA_KEY}`],
    5: [`https://goerli.infura.io/v3/${INFURA_KEY}`],
    137: ['https://matic-mainnet.chainstacklabs.com'],
    8001: ['https://matic-mumbai.chainstacklabs.com'],
    56: ['https://bsc-dataseed.binance.org/'],
    10: ['https://mainnet.optimism.io'],
    42161: ['https://rpc.ankr.com/arbitrum'],
  }
  // The url of the default uniswap token list. This list will be passed to the Uniswap component
  // and will appear by default in the token selector UI.
  const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
  const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

  const connectWallet = () => {
    connect()
  }

  useEffect(() => {
    if (wallet?.provider) {
      setProvider(new ethers.providers.Web3Provider(wallet.provider, 'any'))
    } else {
      // Reset the provider back to 'undefined' such that the
      // connect wallet option will reappear in the uniswap modal
      setProvider(undefined)
    }
  }, [wallet])

  const theme: Theme = {
    primary: '#fafafa',
    secondary: '#98a1c0',
    interactive: '#212b42',
    container: '#0D111C',
    module: '#131A2A',
    accent: '#4c82fb',
    outline: '#98a1c0',
    dialog: '#0D111C',
    borderRadius: 0.8,
  }

  return (
    <section className='swap'>
      <div className='swap__container'>
        <SwapWidget
          theme={theme}
          jsonRpcUrlMap={jsonRpcUrlMap}
          // Specifies the set of tokens that appear by default in the token selector list.
          tokenList={TOKEN_LIST}
          // This is the provider that we receive from the user's connected wallet
          provider={provider}
          // When the Uniswap connect wallet button gets hit
          // the function gets called. We'll hook this up to
          // our connect wallet method from web3-onboard.
          onConnectWalletClick={connectWallet}
          // Address of the token to be selected by default in the
          // input field (e.g. USDC) for each network chain ID.
          defaultInputTokenAddress='NATIVE'
          // Default amount for the input field in this case 1 ETH
          defaultInputAmount='0'
          // Address of the token to be selected by default in the input field (e.g. USDC)
          // for each network chain ID.
          defaultOutputTokenAddress={UNI}
          className='swap__widget'
        />
      </div>
    </section>
  )
}

export default UniSwapWidget
