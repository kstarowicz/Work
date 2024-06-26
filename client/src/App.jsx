import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Status,
  AllJobs,
  Profile,
  Admin,
} from './pages';
import './assets/css/index.css'
//import HomeLayout from './pages/HomeLayout';
//import React from 'react'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Landing/>,
      },
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
    children:[
      {
        index:true,
        element:<AddJob/>
      },
      {
        path:'stats',
        element:<Status/>
      },
            {
        path:'all-jobs',
        element:<AllJobs/>
      },
            {
        path:'profile',
        element:<Profile/>
      },
            {
        path:'admin',
        element:<Admin/>
      },
    ]
    ]
    ]
    ]
  },
  ],
  },
  
  
]);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App