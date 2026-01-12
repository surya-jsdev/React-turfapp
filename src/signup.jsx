import React from 'react'

function Signup() {
    const style = {
        width: "100%",
        height: "100vh",
        backgroundColor: "#0f172af0",
    }
    return (
        <>
            <div style={style} className='flex justify-center items-center '>
                <form action="" className='rounded-xl w-[400px] bg-[#192436] h-auto p-6 flex flex-col items-center'>
                    <div className='mt-6'>
                        <h1 className='text-center text-[2.5em] font-bold text-white'>Create Account</h1>
                        <p className='text-[#91a0b5] text-center m-4'>Join the community and start booking</p>
                    </div>
                    <div>
                        <label htmlFor="email" className='block py-4 text-[#91a0b5] self-start'>Name</label>
                        <input type="text" name="name" id="" placeholder='name@example.com' className='border-[#303e51] border-[2px] p-3 w-xs rounded-xl bg-[#0f172a] placeholder: text-white p-2 text-sm' autoComplete='off' />
                    </div>
                    <div>
                        <label htmlFor="email" className='block py-4 text-[#91a0b5] self-start'>Email Address</label>
                        <input type="text" name="email" id="" placeholder='name@example.com' className='border-[#303e51] border-[2px] p-3 w-xs rounded-xl bg-[#0f172a] placeholder: text-white p-2 text-sm' autoComplete='off' />
                    </div>
                    <div>

                        <label htmlFor="password" className='block py-4 text-[#91a0b5] self-start'>Password</label>
                        <input type="password" name="password" id="" placeholder='Create Password' className='border-[#303e51] border-[2px] p-3 w-xs rounded-xl bg-[#0f172a] placeholder: text-white p-2 text-sm' autoComplete='off' />
                    </div>

                    <button className='py-2 bg-[#8b5cf6] w-xs mt-8 text-white rounded-xl' >SignUp</button>

                    <div className='mt-8 text-white'>
                        <p>Already have an account?</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup