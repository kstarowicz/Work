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
//import HomeLayout from './pages/HomeLayout';
//import React from 'react'


const checkDefaultTheme = () =>{
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};


const isDarkThemeEnabled = checkDefaultTheme

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
    action:()=> {
      console.log('hello there');
     // return null;
    }
  },
  {
    path:'login',
    element: <Login/>,
  },
  {
    path:'dashboard',
    element: <DashboardLayout isDarkThemeEnabled = 
    {isDarkThemeEnabled} />,
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
  },
  ],
  },
  
  
]);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App