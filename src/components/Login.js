import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{ textAlign : 'center', border : '.3em solid black', padding : '1em', width : 'fit-content', margin : 'auto' }}>
        <h3>Login</h3>
        <form>
        <input type="text" placeholder='email' /><br />
        <input type="text" placeholder='password' /><br />
        <input type="submit" value='Sign In' /><br /><br />
        Not A Member? <Link to="/register">Sign Up Now</Link>
        
        </form>
    </div>
  )
}

export default Login