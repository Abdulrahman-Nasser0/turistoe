import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 pt-12">
        <Logo/>
        <Nav/>
    </header>
  )
}

export default Header