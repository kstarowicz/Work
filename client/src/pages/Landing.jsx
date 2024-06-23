import styled from 'styled-components';
//import React from 'react'


const Landing = () => {
  return (
    <Wrapper>

      <h1>Landing Page</h1>
      <div className="content">some content</div>
    </Wrapper>
  )
}

const Wrapper =styled.div`
  background: red;
  h1{
    color:white;
  }
  .content{
    

  }
`;

export default Landing