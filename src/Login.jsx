import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

        try {
            // Simulate API call
            console.log("Logging in...", { email, password });
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Success
            navigate('/');
        } catch (err) {
            setError("Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const style = {
        width: "100%",
        height: "100vh",
        backgroundColor: "#0f172af0",
    }
  
    return (
        <>
            <div style={style} className='flex justify-center items-center '>
                <form onSubmit={handleLogin} className='rounded-xl w-[400px] bg-[#192436] h-auto p-6 flex flex-col items-center'>
                    <div className='mt-9'>
                        <h1 className='text-center text-xl font-bold text-white'>Welcome Back</h1>
                        <p className='text-[#91a0b5] text-center m-4'>Enter your credentials to access your account</p>
                    </div>
                    
                   

                    <div className="w-full">
                        <label htmlFor="email" className='block py-4 text-[#91a0b5] self-start'>Email Address</label>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            id="email" 
                            placeholder='name@example.com'
                            className='border-black border-[2px] py-2 w-full rounded-xl bg-[#0f172a] placeholder:text-white p-2 text-sm text-white' autoComplete='off' />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className='block py-4 text-[#91a0b5] self-start'>Password</label>
                        <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                            name="password" id="password"
                            placeholder='Enter Your Password'
                            className='border-black border-[2px] py-2 w-full rounded-xl bg-[#0f172a] placeholder:text-white p-2 text-sm text-white' autoComplete='off' />
                    </div>
                     {error && <div className='text-red-500 text-sm mt-4 w-full text-center'>{error}</div>}
                    <button disabled={loading} className='py-3 bg-[#8b5cf6] w-full mt-5 text-white rounded-xl hover:bg-[#7c3aed] transition-colors disabled:opacity-50'>{loading ? 'Logging in...' : 'Login'}</button>

                    <div className='mt-8 text-white flex gap-2'>
                        <p>Don't have an account?</p>
                        <Link to="/signup" className='text-[#8b5cf6] hover:underline'>Sign up</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login