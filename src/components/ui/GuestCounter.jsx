import React from 'react'

const GuestCounter = ({ label, description, value, setValue }) => (
  <div className="flex items-center justify-between py-3">
    <div>
      <div className="text-black text-base font-sans">{label}</div>
      <div className="text-gray-400 text-sm font-sans">{description}</div>
    </div>
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="text-2xl px-2 text-gray-700"
        onClick={() => setValue(Math.max(0, value - 1))}
        aria-label={`Decrease ${label}`}
      >
        –
      </button>
      <span className="border rounded px-3 py-1 text-blue-900 font-semibold text-base min-w-[2.5rem] text-center">
        {value}
      </span>
      <button
        type="button"
        className="text-2xl px-2 text-gray-700"
        onClick={() => setValue(value + 1)}
        aria-label={`Increase ${label}`}
      >
        +
      </button>
    </div>
  </div>
);


export default GuestCounter