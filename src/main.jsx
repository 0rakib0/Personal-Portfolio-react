import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import ProjectView from './Components/Pages/ProjectView/ProjectView.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: "Something wrong here........",
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/view-project/',
        element: <ProjectView></ProjectView>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-primaryColor text-white'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
