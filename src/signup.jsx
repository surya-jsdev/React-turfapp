import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            setLoading(false);
            return;
        }

        try {
            console.log("Signing up...", { name, email, password });
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            // On success, navigate to home or login
            navigate('/Login');
        } catch (err) {
            setError("Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const style = {
        width: "100%",
        height: "100vh",
        backgroundColor: "#0f172af0",
    };

    return (
        <div style={style} className='flex justify-center items-center'>
            <form onSubmit={handleSignup} className='rounded-xl w-[400px] bg-[#192436] h-auto p-6 flex flex-col items-center'>
                <div className='mt-6'>
                    <h1 className='text-center text-[2.5em] font-bold text-white'>Create Account</h1>
                    <p className='text-[#91a0b5] text-center m-4'>Join the community and start booking</p>
                </div>
                <div className="w-full">
                    <label htmlFor="name" className='block py-2 text-[#91a0b5]'>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        id="name"
                        placeholder='Enter your name'
                        className='border-[#303e51] border-[2px] p-3 w-full rounded-xl bg-[#0f172a] text-white placeholder-gray-400 text-sm'
                        autoComplete='off'
                        required
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className='block py-2 text-[#91a0b5]'>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        placeholder='name@example.com'
                        className='border-[#303e51] border-[2px] p-3 w-full rounded-xl bg-[#0f172a] text-white placeholder-gray-400 text-sm'
                        autoComplete='off'
                        required
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="password" className='block py-2 text-[#91a0b5]'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        id="password"
                        placeholder='Create Password'
                        className='border-[#303e51] border-[2px] p-3 w-full rounded-xl bg-[#0f172a] text-white placeholder-gray-400 text-sm'
                        autoComplete='off'
                        required
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="confirmPassword" className='block py-2 text-[#91a0b5]'>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder='Confirm Password'
                        className='border-[#303e51] border-[2px] p-3 w-full rounded-xl bg-[#0f172a] text-white placeholder-gray-400 text-sm'
                        autoComplete='off'
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`py-2 px-4 mt-8 text-white rounded-xl w-full ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#8b5cf6] hover:bg-[#7c3aed]'}`}
                >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
                {error && <div className='text-red-500 text-sm mt-4 w-full text-center'>{error}</div>}
                <div className='mt-8 text-white text-center'>
                    <p>Already have an account? <Link to="/login" className='text-[#8b5cf6] hover:underline'>Log in</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Signup;