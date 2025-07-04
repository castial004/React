import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'
import Layout from './Layouts/layout.jsx'
import User from './Components/User.jsx'
import Github from './Components/Github.jsx'
// way 1
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

//way 2
 
  const router = createBrowserRouter(
    
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='github' element={<Github/>}/>
        <Route path='user/:userId' element={<User/>}/>
      </Route>
    )
  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
