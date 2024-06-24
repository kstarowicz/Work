//import React from 'react'

import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError();

  if(error.status === 404){

  }

  return (
    <Wrapper>
      <h1>Error Page</h1>
      <Link to = '/'>back home</Link>
    </Wrapper>
  )
}

export default Error;