import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// form managing hooks
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    email : yup.string().email().required(),
    password : yup.string().required() 
})
 
const Login = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, setValue, formState : { errors } } = useForm({
        resolver : yupResolver(schema)
    })

    const submitForm = async (obj) => {
        const { data } = await axios.post("http://localhost:8000/login", obj)
        console.log(data);

        navigate('/home')
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