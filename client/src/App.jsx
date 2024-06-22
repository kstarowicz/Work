import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from './pages';
//import HomeLayout from './pages/HomeLayout';
//import React from 'react'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    children: [
      {
    path:'register',
    element: <Register/>,
  },
  {
    path:'login',
    element: <Login/>,
  },
  {
    path:'dashboard',
    element: <DashboardLayout/>,
  },
  ],
  },
  
  
]);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App