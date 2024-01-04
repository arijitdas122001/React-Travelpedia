import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Hotels from './pages/Hotels/Hotels.jsx'
import Hotel from './pages/Hotel/hotel.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
  {
    path:"/hotels",
    element:<Hotels/>
  },
  {
    path:"/hotels/:id",
    element:<Hotel/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
