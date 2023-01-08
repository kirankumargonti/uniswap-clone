import React from 'react'
import {Inter} from '@next/font/google'
import Header from '../header/Header'

interface I_layout {
  children: React.ReactNode
}

const inter = Inter({weight: ['400', '500', '700'], subsets: ['latin']})

const Layout = ({children}: I_layout) => {
  return (
    <main className={inter.className}>
      <Header />
      {children}
    </main>
  )
}

export default Layout
