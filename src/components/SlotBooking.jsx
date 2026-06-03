
import { useParams, useLocation } from 'react-router-dom'
import { timeslot } from '../services/api.js'
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

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-10 ">
          {timeslot.map((slot, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg text-center text-white cursor-pointer w-xs hover:bg-blue-500 hover:text-white transition"
            >
              {slot.timeslot}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SlotBooking