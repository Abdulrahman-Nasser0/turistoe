import React from 'react'

const ClientCard = ({ client }) => {
  return (
    <div className='flex flex-col select-none justify-center items-center gap-4  mx-auto'>
        <div className='bg-[#ECF5FF] p-6 rounded-2xl w-[20rem] h-[12rem]'>
            <span className='text-sm'>{client.testimonial}</span>
        </div>
        <div className='w-0  h-0 border-l-20 border-r-20 -mt-4 border-t-20 border-l-transparent border-r-transparent border-t-[#ECF5FF]'></div>
        <div className='flex justify-start items-start w-28 mt-4'>
            <img className='rounded-full max-w-full object-cover' src={client.image} alt={client.name} />
        </div>
        <h3 className='mt-4 text-2xl font-bold'>{client.name}</h3>
            
    </div>
  )
}

export default ClientCard