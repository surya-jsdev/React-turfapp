import React from 'react'
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
                    <button style={style} className='bg[#8b5cf6]'>Login</button>
                </div>
            </div>
            <section className='w-full h-140 bg-[#1b2537] flex justify-center items-center'>
                <div>
                    <h1 className='text-[3.5rem] text-white text-center'>Book Your Game <br />Own the Turf</h1>
                     <p className="text-[1.2rem] text-white text-center w-[600px]" >
                        Premium sports venues for Football, Cricket, and Pickleball. Instant booking, zero hassle.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Home