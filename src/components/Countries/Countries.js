import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    console.log(countries);
    return (
        <div className='body-style'>

            <h5>Country Fond : {countries.length}</h5>
            <div className="cards">{
                countries.map(country => <Country
                    key={country.alpha3Code}
                    country={country}
                ></Country>)
            }</div>
        </div>
    );
};

export default Countries;