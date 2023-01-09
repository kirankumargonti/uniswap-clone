import {init} from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import {svgInString} from '../shared/logoInString'
import coinbaseModule from '@web3-onboard/coinbase'
import gnosisModule from '@web3-onboard/gnosis'
import keepkeyModule from '@web3-onboard/keepkey'
import keystoneModule from '@web3-onboard/keystone'
import ledgerModule from '@web3-onboard/ledger'
import walletConnectModule from '@web3-onboard/walletconnect'
import dcentModule from '@web3-onboard/dcent'
import sequenceModule from '@web3-onboard/sequence'
import tallyHoModule from '@web3-onboard/tallyho'
import enkryptModule from '@web3-onboard/enkrypt'

const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY

const chains = [
  {
    id: '0x1',
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  },
  {
    id: '0x5',
    token: 'GoerliETH',
    label: 'Goerli',
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  },
  {
    id: '0x13881',
    token: 'MATIC',
    label: 'Polygon Mumbai',
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com',
  },
  {
    id: '0x89',
    token: 'MATIC',
    label: 'Polygon',
    rpcUrl: 'https://matic-mainnet.chainstacklabs.com',
  },
  {
    id: '0x38',
    token: 'BNB',
    label: 'Binance',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
  },
  {
    id: '0xA',
    token: 'OETH',
    label: 'Optimism',
    rpcUrl: 'https://mainnet.optimism.io',
  },
  {
    id: '0xA4B1',
    token: 'ARB-ETH',
    label: 'Arbitrum',
    rpcUrl: 'https://rpc.ankr.com/arbitrum',
  },
]

const injected = injectedModule()
const coinbase = coinbaseModule()
const dcent = dcentModule()
const walletConnect = walletConnectModule()
const ledger = ledgerModule()
const keystone = keystoneModule()
const keepkey = keepkeyModule()
const gnosis = gnosisModule()
const sequence = sequenceModule()
const tally = tallyHoModule()
const enkrypt = enkryptModule()

const wallets = [
  injected,
  coinbase,
  dcent,
  walletConnect,
  ledger,
  keystone,
  keepkey,
  gnosis,
  sequence,
  tally,
  enkrypt,
]

const appMetadata = {
  name: 'Uniswap',
  icon: svgInString,
  description: 'showcasing how to integrate web3-onboard with uniswap.',
  recommendedInjectedWallets: [
    {name: 'MetaMask', url: 'https://metamask.io'},
    {name: 'Coinbase', url: 'https://wallet.coinbase.com/'},
  ],
}

// initialize and export Onboard
export default init({
  wallets,
  chains,
  appMetadata,
})
