/* eslint-disable react/prop-types */

import { useState } from 'react';
import './flags.css';

const Flags = ({country,handeleVisitedCountry}) => {
    const {name,flags,area,cca3} = country;
    // console.log(country)
    const [visited,setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }
    // console.log(handeleVisitedCountry);
    return (
        <div className={`country ${visited ?'visited':'non-visted'}`}>
            
            <img className='image-box' src={flags.png} alt="" />
            <h3 style={{color: visited ? 'rgb(143, 227, 17)':'purple'}} >Name : {name?.common}</h3>
            <p>Area : {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>{visited?'visited':'I want to visit'}</button>
            {visited ? 'I have visited':'i want to visit'}
            <button onClick={()=>{handeleVisitedCountry(country)}}>Mark Visited</button>
        </div>
    )
};

export default Flags;