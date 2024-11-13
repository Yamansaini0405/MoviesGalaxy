import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'

import './index.css'

import Trending from './components/Trending.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      
      <Route path='/Trending' element={<Trending/>}/>
      

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
  
)