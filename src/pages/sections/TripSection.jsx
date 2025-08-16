import TripCarousel from '@/components/ui/TripCarousel'
import React from 'react'

const TripSection = () => {
  return (
    <section className="p-6">
        <h2 className="text-[2rem] font-bold text-center mb-10">Ultimate Travel Experience</h2>
    <p className="text-center text-black mb-4">
        We offer a wide range of services, including flight booking, hotel booking, car rental, visa assistance, insurance, and tours and activities. We work with leading global service providers to ensure you have the best possible travel experience. We also offer customized solutions for our clients that can be adapted to their specific needs and budget.    </p>
    <TripCarousel/>
    
    </section>
  )
}

export default TripSection