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

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
//import HomeLayout from './pages/HomeLayout';
//import React from 'react'

import { loader as dashboardLoader } from './pages/DashboardLayout';
import { action as addJobAction } from './pages/AddJob';
//import { action as allJobsLoader} from './pages/AllJobs';

const checkDefaultTheme = () =>{
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};


const isDarkThemeEnabled = checkDefaultTheme();

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
    action: registerAction,
    //action:()=> {
    //  console.log('hello there');
     // return null;
    //}
  },
  {
    path:'login',
    element: <Login/>,
    action: loginAction,
  },
  {
    path:'dashboard',
    element: <DashboardLayout isDarkThemeEnabled = {isDarkThemeEnabled} />,
    loader: dashboardLoader,
    children: [
      {
        index:true,
        element:<AddJob/>, action: addJobAction
      },
      {
        path:'stats',
        element:<Status/>
      },
            {
        path:'all-jobs',
        element:<AllJobs/>,
        //loader: allJobsLoader,
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
  },
  ],
  },
  
  
]);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App