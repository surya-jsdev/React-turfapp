import React from 'react'
import { useParams } from 'react-router-dom'

function SlotBooking() {
  const { id } = useParams()

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold">Slot booking</h2>
        <p className="text-sm text-gray-400">Selected turf id: {id}</p>
      </div>
    </>
  )
}

export default SlotBooking