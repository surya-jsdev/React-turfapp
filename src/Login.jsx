import React from 'react'

function Login() {

    const style={
        width:"350px",
        height:"300px",
        backgroundColor:"#0f172a"
    }
    return (
        <>
        <div style={style}>
            <h1>LOGIN</h1>

            <form action="" className='rounded-xl'>
                <div>
                    <label htmlFor="email" className='block py-2 text-white'>Email:</label>
                    <input type="text" name="email" id=""  placeholder='Enter Email...' className='border-white border-[2px] py-2 w-xs rounded-xl'/>
                </div>
                <div>
                    <label htmlFor="password" className='block py-2  text-white'>Password:</label>
                    <input type="text" name="email" id=""  placeholder='Enter Password...' className='border-white border-[2px] py-2 w-xs rounded-xl'/>
                </div>
                <button className='py-3 bg-[#8b5cf6] w-xs mt-5 text-white rounded-xl' >Login</button>
            </form>
        </div>
        </>
    )
}

export default Login