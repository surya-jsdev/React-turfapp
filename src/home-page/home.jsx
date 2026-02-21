import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { turf } from '../services/api'
function Home() {
    const navigate = useNavigate()
    const style = {
        padding: "10px",
        margin: "5px",
        color: "white",
        border: "1px solid white",
        borderRadius: "10px",
    }
    return (
        <>
            <div className='p-5  w-full flex justify-between bg-[#0f172a] border-b-1 border-[#253144] fixed'>
                <h2 className='text-white text-[1.5em] font-bold'><span className='text-[#8257e7] p-2'>ROGER</span>ACADEMY</h2>
                <div className=''>
                    <button style={style} onClick={() => navigate('/signup')} className="btn">Signup</button>
                    <button style={style} className='bg-[#8b5cf6] w-[100px]' onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
            <section className='w-full h-[80vh] bg-[#1b2537] flex justify-center items-center'>
                <div className='flex justify-center flex-wrap w-xl'>
                    <h1 className='text-[3.5rem] text-white text-center'>Book Your Game <br />Own the Turf</h1>
                    <p className="text-[1.2rem] text-white text-center w-[600px] text-[#7b90a8]" >
                        Premium sports venues for Football, Cricket, and Pickleball. Instant booking, zero hassle.
                    </p>
                    <button className='mt-4 flex text-white bg-[#8b5cf6] p-3 rounded-xl'>
                        Explore Venues <ArrowRight size={24} className="ml-1" />
                    </button>
                </div>
            </section>
            <section className='py-16 bg-[#0f172a]'>
                <div className='min-w-4xl mx-auto px-4 flex flex-wrap justify-center'>
                    {/* <div className=''><h2>Our games</h2></div> */}
                    {turf.map((t) => (
                        <div key={t.id} className='max-w-sm bg-[#0b1220] m-4 p-4 rounded-xl text-white shadow-lg cursor-pointer'>
                            <img src={t.image} alt={t.name} className='w-full h-40 object-cover rounded-md' />
                            <h3 className='mt-2 font-bold text-lg'>{t.name}</h3>
                            <p className='text-sm text-[#9aa6b7]'>{t.location} • {t.sport}</p>
                            <div className='mt-3 flex justify-between items-center'>
                                <span className='font-semibold'>₹{t.price}</span>
                                <span className='text-yellow-400'>{t.rating} ★</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home