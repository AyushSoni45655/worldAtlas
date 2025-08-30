import { worldsdata } from "../api/countryData";
export const About = ()=>{
  return <section className="about_section">
    <div className="container">
     <div className="abouttitle">
      <h2>here are the interesting facts <br /> we're proud of</h2>
     </div>
     <div className="gradient-cards grid g_three_c">
      {worldsdata.map((element,index)=>{
        const {id,countryName,capital,population,interestingFact} = element;
        return <div className="card" key={id}>
        <p className="card-title">{countryName}</p>
        <p><span className="card_description">Capital :</span>{capital}</p>
        <p><span className="card_description">Population :</span>{population}</p>
        <p className="card_fact"><span className="card_description">Interesting Fact :</span>{interestingFact}</p>
      </div>
      })}
      
     </div>
    </div>
  </section>
}