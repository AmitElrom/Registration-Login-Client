import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// form managing hooks
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    email : yup.string().email().required(),
    password : yup.string().required() 
})
 
const Login = () => {

    const { register, handleSubmit, setValue, formState : { errors } } = useForm({
        resolver : yupResolver(schema)
    })

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <div style={{ textAlign : 'center', border : '.3em solid black', padding : '1em', width : 'fit-content', margin : 'auto' }}>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(submitForm)} >
                <input type="text" placeholder='email' {...register('email')} /><br />
                <input type="text" placeholder='password' {...register('password')} /><br />
                <input type="submit" value='Sign In' /><br /><br />
                Not A Member? <Link to="/register">Sign Up Now</Link>
            </form>
        </div>
    )
}

export default Login