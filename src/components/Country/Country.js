import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    const { name, flag, region, capital, timezones, currencies } = props.country;

    return (
        <div className='card'>
            <img src={flag} alt="" style={{ width: '200px' }} />

            <p style={{ textAlign: 'center' }}> <b>{name}</b><br />
                <span> Region : {region} <br />
                    Capital:{capital} <br />
                    Timezone : {timezones[0]} <br />
                    Currency : {currencies[0].name} ({currencies[0].symbol})
                </span></p>

        </div>
    );
};

export default Country;