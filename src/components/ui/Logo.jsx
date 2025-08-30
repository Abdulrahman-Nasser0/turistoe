import React from 'react'
import { Link } from 'react-router'

const Logo = () => {
  return (
    <div className="text-white font-bold text-2xl
                       tracking-wide select-none"
                      >
      <Link to="/">Turistoe</Link>
    </div>
  )
}

export default Logo