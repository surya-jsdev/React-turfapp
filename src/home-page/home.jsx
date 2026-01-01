import React from 'react'
function Home() {


    const style = {
        padding: "8px",
        margin: "5px",
        color: "white",
        border: "1px solid white",
    }
    return (
        <>
            <div className='p-10  w-full flex justify-around'>
                <h2 className='text-white text-[1.5em]'><span className='text-[red]'>ROGER
                </span>ACADEMY</h2>
                <div>
                    <button style={style}>Login</button>
                    <button style={style}>Signup</button>
                </div>
            </div>
        </>
    )
}

export default Home