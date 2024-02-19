import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Services from '../components/Services'

export default function Home() {
  return (
    <div className='pt-10'>
        <Header />
        <Menu />
        <Services />
    </div>
  )
}
