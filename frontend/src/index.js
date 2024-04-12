import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error';
import Home from './pages/Home';
import Article from './pages/Article';
import Logout from './pages/Logout';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Register from './pages/Register';
const router = createBrowserRouter ([
  {
    path:"/",
    element:<Layout />,
    errorElement:<Error />,
    children:[
{index:true, element:<Home/>},
{path:"articles/:id", element:<Article/>},
{path:"login", element:<Login />},
{path:"logout", element:<Logout />},
{path:"Register", element:<Register />},
{path:"Profil", element:<Profil/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
<RouterProvider router={router} />




  </React.StrictMode>
);


