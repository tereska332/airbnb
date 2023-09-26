import React from 'react';

export const Hero = () => {
    return ( 
        <section className='hero'>
            <img className='hero--photo' src={require("../assets/photo-grid.png")} alt='main' />
            <h1 className='hero--header'>Airbnb Plus Accommodation</h1>
            <p className='hero--text'>When you join Airbnb Plus, you become part of a select group of Hosts recognized for top-level quality, design, and hospitality. In addition to meeting our program standards and terms and conditions, you’ll need to follow our exclusivity requirements.</p>
            <img className='plus' src={require("../assets/rectangle5.png")} alt='aibnb Plus' />
        </section>
     );
}

 