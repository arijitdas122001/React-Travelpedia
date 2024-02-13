import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Hotels from './pages/Hotels/Hotels.jsx'
import Hotel from './pages/Hotel/hotel.jsx'
import Register from './pages/Register/register.jsx'
import Login from './pages/Login/login.jsx'
import { Provider } from 'react-redux'
import store from './redux-store/store.js'
import Cart from './pages/Cart/Cart.jsx'
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
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
