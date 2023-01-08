import Head from 'next/head'

// Types
interface I_HeaderMetaInfo {
  title: string
  description: string
}

const MetaData = ({title, description}: I_HeaderMetaInfo) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{title}</title>
      <meta name='author' content='Uniswap'></meta>
      <meta name='robots' content='index,follow' />
      <meta
        name='keywords'
        content='Uniswap, Uniswap liquidity, Dapp, Uniswap Tokens, Token, EVM, Swap, Bride, On-chain governance'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />

      <meta name='description' content={description} />
      <meta name='application-name' content='Uniswap' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='Uniswap' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-config' content='/browserconfig.xml' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-tap-highlight' content='no' />
    </Head>
  )
}

export default MetaData
