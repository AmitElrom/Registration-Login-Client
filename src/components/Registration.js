import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

// form managing hooks
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    email : yup.string().email().required(),
    password : yup.string().required() 
})

const Registration = () => {

    const { register, handleSubmit, setValue, formState : { errors } } = useForm({
        resolver : yupResolver(schema)
    })

    const submitForm = async (obj) => {
        const { data } = await axios.post("http://localhost:8000/signup", obj)
        console.log(data);
    }

    return (
        <div style={{ textAlign : 'center', border : '.3em solid black', padding : '1em', width : 'fit-content', margin : 'auto' }}>
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit(submitForm)} >
                <input type="text" placeholder='email' {...register('email')} /><br />
                <input type="text" placeholder='password' {...register('password')} /><br />
                <input type="submit" value='Sign Up' /><br /><br />
                Already A Member? <Link to="/">Log In</Link>
            </form>
        </div>
    )
}

export default Registration