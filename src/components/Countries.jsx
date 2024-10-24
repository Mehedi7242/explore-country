import { useState } from "react";
import { useEffect } from "react";
import Flags from "./Flags";
import './country.css'

const Countries = () => {
    const [countries,setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handeleVisitedCountry = country =>{
        console.log('add this to your country')
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)

    }


    // {
    //     countries.map(country=>console.log(country))
    // }

    return (
        <div>
            <h3>Country Count : {countries.length}</h3>

            <ol>
                {
                    visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
            </div>
            <div className="country-container">
            {
                countries.map(country=>
                    <Flags 
                        key={country.cca3} 
                        country={country}
                        handeleVisitedCountry={handeleVisitedCountry}>
                    </Flags>)
            }
            </div>
        </div>

    );
};

export default Countries;