
import {Link} from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
//import { Logo } from '../assets/components/Logo'
import { FormRow, Logo } from '../components/';
//import React from 'react'

const Register = () => {
  return (
    <Wrapper>
        <form className='form'>
        <Logo />
        <h4>Register</h4>

        <FormRow 
        type='text' 
        name='name' 
        defaultValue='karolina'
        />
        <FormRow 
        type='text' 
        labelText='last name'
        name='lastName' 
        defaultValue='str'
        />
        <FormRow 
        type='text' 
        name='location' 
        defaultValue='earth'
        />
        <FormRow 
        type='email' 
        name='name' 
        defaultValue='karolina@karolina.com'
        />
        <FormRow 
        type='password' 
        name='password' 
        defaultValue='secret123'/>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register