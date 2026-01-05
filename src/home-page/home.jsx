import React from 'react'
import { turf } from '../services/api'
function Home() {
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
                    <button style={style}>Signup</button>
                    <button style={style} className='bg-[#8b5cf6] w-[100px]'>Login</button>
                </div>
            </div>
            <section className='w-full h-160 bg-[#1b2537] flex justify-center items-center'>
                <div className='flex justify-center flex-wrap w-xl'>
                    <h1 className='text-[3.5rem] text-white text-center'>Book Your Game <br />Own the Turf</h1>
                     <p className="text-[1.2rem] text-white text-center w-[600px] text-[#7b90a8]" >
                        Premium sports venues for Football, Cricket, and Pickleball. Instant booking, zero hassle.
                    </p>
                    <button className='mt-4 text-white bg-[#8b5cf6] p-3 rounded-xl'>
                        Explore Venues
                    </button>
                </div>
            </section>
            <section>
                <div>
                   
                </div>
            </section>
        </>
    )
}

export default Home