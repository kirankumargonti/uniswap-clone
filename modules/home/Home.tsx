import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// Images
import SwapImage from '/public/assets/png/swap.png'

const Home: React.FunctionComponent = () => {
  return (
    <section className='home'>
      <div className='home__container'>
        <div className='home__container__swap'>
          <div className='home__container__swap__wrapper'>
            <Link href='/swap'>
              <Image src={SwapImage} alt='Swap' />
            </Link>
          </div>
        </div>
        <div className='home__container__banner'>
          <h1>Trade crypto & NFTs with confidence</h1>
          <p>Buy, sell, and explore tokens and NFTs</p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Home
