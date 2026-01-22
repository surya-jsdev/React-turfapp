import React, { useState } from 'react'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const style = {
        width: "100%",
        height: "100vh",
        backgroundColor: "#0f172af0",
    }
  
    return (
        <>
            <div style={style} className='flex justify-center items-center '>
                <form action="" className='rounded-xl w-[400px] bg-[#192436] h-auto p-6 flex flex-col items-center'>
                    <div className='mt-9'>
                        <h1 className='text-center text-xl font-bold text-white'>Welcome Back</h1>
                        <p className='text-[#91a0b5] text-center m-4'>Enter your credentials to access your account</p>
                    </div>
                    <div>
                        <label htmlFor="email" className='block py-4 text-[#91a0b5] self-start'>Email Address</label>
                        <input type="text"
                            value={email}
                            name="email"
                            id="" placeholder='name@example.com'
                            className='border-black border-[2px] py-2 w-xs rounded-xl bg-[#0f172a] placeholder: text-white p-2 text-sm' autoComplete='off' />
                    </div>
                    <div>
                        <label htmlFor="password" className='block py-4 text-[#91a0b5] self-start'>Password</label>
                        <input type="text"
                           value={password}
                            name="email" id=""
                            placeholder='Enter Your Password'
                            className='border-black border-[2px] py-2 w-xs rounded-xl bg-[#0f172a] placeholder: text-white p-2 text-sm' autoComplete='off' />
                    </div>
                    <button className='py-3 bg-[#8b5cf6] w-xs mt-5 text-white rounded-xl'>Login</button>

                    <div className='mt-8 text-white'>
                        <p >Don't have an account?</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login