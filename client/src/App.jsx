import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//import React from 'react'

const router = createBrowserRouter([
  {
    path:'/',
    element: <h1>home</h1>,
  },
   {
    path:'/about',
    element: (
      <div>
        <h1>about page</h1>
      </div>
    
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App