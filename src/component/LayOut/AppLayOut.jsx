import { Headers } from "../Ui/Headers";
import { Footers } from "../Ui/Footers";
import { Outlet } from "react-router-dom";
export const AppLayOut = ()=>{
  return(
    <>
    <Headers/>
    <Outlet/>
    <Footers/>
    </>
  );
}