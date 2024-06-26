import {Link} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components/';

//import React from 'react'

const Login = () => {
  return (
    <Wrapper>
     <form className='form'>
      <Logo />
       <h4>login </h4>
    </form>
    </Wrapper>
  )
}

export default Login