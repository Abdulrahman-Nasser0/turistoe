import React from 'react'

const TripCard = ({ trip }) => (
  <div
    className="relative select-none rounded-3xl overflow-hidden shadow-lg h-[520px] flex flex-col justify-end"
    style={{
      backgroundImage: `url('${trip.image}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    <div className="relative z-10 p-6 flex flex-col gap-4">
      <div className="text-white text-lg font-sans flex items-center gap-2">
        <span className="inline-block align-middle">📍</span>
        {trip.country}
      </div>
      <div className="text-white text-sm">{trip.days}</div>
      <div className="text-white text-2xl font-bold mb-2">{trip.title}</div>
      <div className="flex items-center justify-between">
        <button className="border border-white rounded-full px-6 py-2 text-white bg-transparent font-semibold hover:bg-white hover:text-black transition">
          Book Now
        </button>
        <span className="text-white text-lg font-semibold">{trip.price}</span>
      </div>
    </div>
  </div>
);

export default TripCard