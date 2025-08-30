
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FooterData } from "../../api/FooterApi";
export const Footers = ()=>{
  const footericon = {
    IoIosCall:<IoIosCall/>,
    CiMail:<CiMail/>,
    FaLocationDot:<FaLocationDot/>,

  }
  return(
   <footer className="footer_section">
    <div className="container">
      {FooterData.map((element,index)=>{
        const  {icon,title,contacts} = element;
        return  <div className="box">
        <p className="fIcon">{footericon[icon]}</p>
        <div className="description">
          <h3>{title}</h3>
          <h4>{contacts}</h4>
        </div>
      </div>
      })}
    

    </div>
   </footer>
  );
}