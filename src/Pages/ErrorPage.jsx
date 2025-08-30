import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = ()=>{
  const error = useRouteError();
  console.log(error);
  
  return(
    <>
    <h1>OOPS, Somwthing went wrong!!!</h1>
    <h2>{error.data}</h2>
    <h1>{error.status}</h1>
   <NavLink to="/"> <button>Go Home</button></NavLink>
    </>
  );
}

