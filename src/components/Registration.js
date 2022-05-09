import React from 'react'
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div style={{ textAlign : 'center', border : '.3em solid black', padding : '1em', width : 'fit-content', margin : 'auto' }}>
        <h3>Sign Up</h3>
        <form>
        <input type="text" placeholder='email' /><br />
        <input type="text" placeholder='password' /><br />
        <input type="submit" value='Sign Up' /><br /><br />
        Already A Member? <Link to="/">Log In</Link>
        
        </form>
    </div>
  )
}

export default Registration