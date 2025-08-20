import React from 'react'
import { Button } from '../../components/ui/button'

const FooterSection = () => {
  return (
    <footer className="p-6">
       

        <div className='bg-[#001D40] rounded-lg p-8 mb-12'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-bold mb-2'>Take a trip with us</h3>
            <p className='text-sm text-gray-300'>
              Subscribe to be the first to know about our new trips and additional promotions
            </p>
          </div>
          <div className='flex max-w-md mx-auto gap-2'>
            <input
              type="email"
              placeholder="Enter your email address"
              className='flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400'
            />
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Subscribe
            </Button>
          </div>
        </div>

        <div className='flex justify-between items-center pt-4 border-t border-white/20'>
          <h3 className='text-xl font-bold'>About Us</h3>
          <div className='flex gap-8'>
            <a href="#" className='hover:text-gray-300'>Terms</a>
            <a href="#" className='hover:text-gray-300'>Privacy</a>
            <a href="#" className='hover:text-gray-300'>Cookies</a>
          </div>
        </div>
    </footer>
  )
}

export default FooterSection
