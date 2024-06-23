import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'

//import React from 'react'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="work" className='logo' />
      </nav>
    </Wrapper>
  );
};


export default Landing