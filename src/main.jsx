import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/componentes/App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../src/componentes/Home.jsx'
import Produtos from '../src/componentes/Produtos.jsx'
import Sobre from '../src/componentes/Sobre.jsx'


const router = createBrowserRouter([

{
  path: '/', element: <App/>,

  children:[
    {path:'/Home',element: <Home/>},
    {path:'/Produtos',element: <Produtos/>},
    {path:'/Sobre',element: <Sobre/>}
  ],
},

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)