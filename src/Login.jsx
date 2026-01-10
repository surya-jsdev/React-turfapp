import React from 'react'

function Login() {

    const style = {
        width: "100%",
        height: "100vh",
        backgroundColor: "#0f172af0",
    }
    return (
        <>
            <div style={style} className='flex justify-center items-center '>
                <form action="" className='rounded-xl w-sm bg-white h-[45vh] p-4'>
                    <h1 className='text-center text-2xl'>LOGIN</h1>
                    <div>
                        <label htmlFor="email" className='block py-2 text-white'>Email:</label>
                        <input type="text" name="email" id="" placeholder='Enter Email...' className='border-black border-[2px] py-2 w-xs rounded-xl' />
                    </div>
                    <div>
                        <label htmlFor="password" className='block py-2  text-white'>Password:</label>
                        <input type="text" name="email" id="" placeholder='Enter Password...' className='border-black border-[2px] py-2 w-xs rounded-xl' />
                    </div>
                    <button className='py-3 bg-[#8b5cf6] w-xs mt-5 text-white rounded-xl' >Login</button>
                </form>
            </div>
        </>
    )
}

export default Login