
import { useParams, useLocation } from 'react-router-dom'
import { timeslot } from '../services/api.js'
function SlotBooking() {
  const { id } = useParams()
  const location = useLocation()
  const { image, name } = location.state

  return (
    <section className='slotbooking'>
      <div className="p-6 w-6xl h-[650px] bg-[white] rounded-lg">
        <h2 className="text-2xl font-bold ">Book Your Turf Slot</h2>
        <p className="text-sm text-gray-400">Select date and time slot to book your turf</p>
        <img src={image} alt={name} className='w-xs h-40 cover rounded-md' />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-10 ">
          {timeslot.map((slot, index) => (
            <div
              key={index}
              className="w-[100px] p-4 border rounded-lg text-center text-black cursor-pointer w-xs hover:bg-blue-500 hover:text-white transition"
            >
              {slot.timeslot}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SlotBooking