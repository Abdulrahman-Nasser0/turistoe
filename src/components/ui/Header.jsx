import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="flex items-center justify-between  pt-12 max-w-7xl mx-auto">
        <Logo/>
        <Nav/>
    </header>
  )
}

export default Header