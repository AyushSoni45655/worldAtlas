import { FaLongArrowAltRight } from "react-icons/fa";
export const HeroPage = ()=>{
  return (
    <main className="hero-section">
    <div className="container grid g_two_c">
      <div className="hero-content">
        <h1 className="heading-xl">explore the world,one country at a time</h1>
        <p className="paragraph">discover the history culture and beautyof every nation ,sort search and filter through countries to find the details you</p>
        <button className="btn">start  exploring <FaLongArrowAltRight /></button>
      </div>
      <div className="hero-image">
        <img src="/public/images/world.png" alt="world Atlas" className="banner-image" />
      </div>
    </div>
    </main>
  );
}