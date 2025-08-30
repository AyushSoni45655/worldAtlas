import axios from "axios";
const api = axios.create({
  baseURL:"https://restcountries.com/v3.1",
});
export const  getCountriesApi = ()=>{
return api.get("/all?fields=name,population,region,capital,flags");
};
export const  getIndividualCountriesApi = (names)=>{
return api.get(`/name/${names}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
};