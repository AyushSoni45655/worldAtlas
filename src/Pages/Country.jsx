import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState, useTransition } from "react";
import { getCountriesApi } from "../api/postapi";
import { CustomLoader } from "../component/customLoader";
import { NavLink } from "react-router-dom";
export const Country = ()=>{
  
  const [isPending ,startTransition] = useTransition();
  const [countries,setCountry] = useState([]);
  const [Allcountries,setAllCountry] = useState([]);
 
  useEffect(()=>{
    startTransition(async()=>{
      const responce = await getCountriesApi(); 
      setCountry(responce.data);
      setAllCountry(responce.data);
    });
    
  },[]);
  if(isPending)return <CustomLoader/>;
  const handleReciveData = (e)=>{
    // console.log(e.target.value);
    if(e.target.value === ""){
      setCountry(Allcountries);
    }else{
      const filters = Allcountries.filter((ele,index)=>{
        return ele.name.common.toLowerCase().startsWith(e.target.value.toLowerCase());

      });
      setCountry(filters);
    }
    
  }
  const handleAssending = ()=>{
    const assend = [...countries].sort((a,b)=>{
      return a.name.common.localeCompare(b.name.common);
    });
    setCountry(assend);
  }

  const handleSelectChange = (e)=>{
    console.log(e.target.value);
    let val = e.target.value;
    if(val === "All"){
      setCountry(Allcountries);
    }else{
      const selects = Allcountries.filter((e,index)=>{
        return e.region === val;
      });
      setCountry(selects);
    }
    
  }
   const handledesending = ()=>{
    const descend = [...countries].sort((a,b)=>{
      return b.name.common.localeCompare(a.name.common);
    });
    setCountry(descend)
  }
  return(
    <section className="country-section">
      <div className="container">
        <div className="function_box">
          <div className="inpBox">
            <input type="text" name="Countrys" className="inputss" placeholder="Search Your Country" onChange={handleReciveData}/>
          </div>
          <div className="orders" onClick={handleAssending}>Asc</div>
          <div className="orders" onClick={handledesending}>Desc</div>
          <div className="checkbox-box">
            <select name="choose" className="checkbox"  onChange={handleSelectChange} >
              <option value="All">All</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Americas">Americas</option>
              <option value="Antarctic">Antarctic</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div className="country-box grid g_four_c">
          {
            countries.map((ele,index)=>{
              return   <div className="country-divs"key={index}>
            <div className="imgg">
              <img src={countries[index].flags.png} alt="tunishia" />
            </div>
            <h2 className="c-title">{countries[index].name.common}</h2>
            <p><span className="keyvalue">population</span>{countries[index].population}</p>
            <p><span className="keyvalue">region</span>{countries[index].region}</p>
            <p><span className="keyvalue">capital</span>{countries[index].capital[0]}</p>
            
            <NavLink to={`/country/${countries[index].name.common}`}><button>Read More <FaLongArrowAltRight /></button></NavLink>
          </div>
            })
            
          }
        
        </div>
      </div>
    </section>
  );
}