import React from 'react';
import { RouterProvider, createBrowserRouter, BrowserRouter, Router, Route  } from 'react-router-dom';
import Login from './Components/Login/Login';
import Albums from './Components/Albums/Albums';
import Photos from './Components/Photos/Photos';

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Login />},
    {path:'/albums', element:<Albums />},
    {path:'/photos',element:<Photos />},
  ]);
  return (
    <>
  
      <RouterProvider router={router}/>

    </>
  );
}

export default App;
