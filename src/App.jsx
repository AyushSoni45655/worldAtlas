

import './App.css'
import { About  } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Country } from './Pages/Country';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './Pages/Home';
import { ErrorPage } from './Pages/ErrorPage';
import { AppLayOut } from './component/LayOut/AppLayOut';
import { CountryDetails } from './component/LayOut/CountryDetails';
const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayOut/>,
    errorElement:<ErrorPage/>,
    children:[
       {
    path:"/",
    element:<Home/>
  },
    {
    path:"about",
    element:<About/>
  },
    {
    path:"country",
    element:<Country/>
  },
   {
    path:"country/:id",
    element:<CountryDetails/>
  },
    {
    path:"contact",
    element:<Contact/>
  },
    ]
  }
 
]);
function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
