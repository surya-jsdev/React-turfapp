import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

function SlotBooking() {
  const { id } = useParams()
  const location = useLocation()
  const { image, name } = location.state

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold">Slot booking</h2>
        <p className="text-sm text-gray-400">Selected turf id: {id}</p>
        <img src={image} alt={name} className='w-xs h-40 cover rounded-md' />
      </div>
    </>
  )
}

export default SlotBooking