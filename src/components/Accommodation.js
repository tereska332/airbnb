import React from 'react';

import { AccommodationSection } from './section/AccommodationSection';

import { dataAccommodations } from '../data/accommodation-data';

export const Accommodation = () => {

    const accommodations = dataAccommodations.map(item => {
        return(
          <AccommodationSection key={item.id}
            item={item}
          />
        )
      });

    return ( 
        <section className='hero'>
            <h1 className='hero--header'>Accommodation around the world</h1>
            <section className='accommodations-list'>
                {accommodations}
            </section>
        </section>
     );
}

 