import {NextPage} from 'next'

// Components
import UniSwapWidget from '../modules/swap/UniSwapWidget'
import MetaData from '../shared/metaData/MetaData'

const Swap: NextPage = () => {
  return (
    <>
      <MetaData
        title='Uniswap Interface'
        description='Uniswap is a decentralized cryptocurrency exchange that uses a set of smart contracts to execute trades on its exchange. It`s an open source project and falls into the category of a DeFi product because it uses smart contracts to facilitate trades'
      />
      <UniSwapWidget />
    </>
  )
}

export default Swap
