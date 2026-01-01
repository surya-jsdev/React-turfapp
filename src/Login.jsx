import React from 'react'

function Login() {

    const style={
        width:"350px",
        height:"300px",
        backgroundColor:"red"
    }
    return (
        <>
        <div style={style}>
            <h1>LOGIN</h1>

            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id=""  placeholder='Enter Email...'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="email" id=""  placeholder='Enter Password...'/>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login