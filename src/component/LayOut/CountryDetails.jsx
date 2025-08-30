

import { NavLink, useParams } from "react-router-dom";
import { getIndividualCountriesApi } from "../../api/postapi";
import { useEffect, useState } from "react";

import { CustomLoader } from "../customLoader";

export const CountryDetails = () => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        const response = await getIndividualCountriesApi(id);
        setCountry(response.data[0]);
        console.log("API Response:", response.data[0]);
      } catch (error) {
        console.error("Error fetching country:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) return <CustomLoader />;

  return (
    <section className="detals_section">
      <div className="container">
        <div className="imagee">
          <img src={country?.flags?.png} alt="country-flag" />
        </div>
        <div className="country_details">
          <h2 className="title">{country?.name?.official}</h2>
          
          <p>
            <span className="cDKey">Native Names :</span>
            {country?.name?.nativeName && Object.values(country.name.nativeName)[0]?.common}
          </p>

          <p><span className="cDKey">Population :</span>{country?.population}</p>
          <p><span className="cDKey">Region :</span>{country?.region}</p>
          <p><span className="cDKey">Sub Region :</span>{country?.subregion}</p>
          <p><span className="cDKey">Capital :</span>{country?.capital?.[0]}</p>
          <p><span className="cDKey">Top Level Domain :</span>{country?.tld?.[0]}</p>

          <p>
            <span className="cDKey">Currencies :</span>
            {country?.currencies && Object.values(country.currencies)[0]?.name}
          </p>

          <p>
            <span className="cDKey">Languages :</span>
            {country?.languages && Object.values(country.languages).join(", ")}
          </p>
        </div>
        <NavLink to="/country"><button className="back-btn">Go Back</button></NavLink>
        
      </div>
    </section>
  );
};
