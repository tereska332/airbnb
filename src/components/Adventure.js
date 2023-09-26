import React from 'react';

import { AdventureSection } from './section/AdventureSection';

import { dataAdventures } from '../data/adventure-data';

export const Adventure = () => {

    const adventures = dataAdventures.map(item => {
        return(
          <AdventureSection key={item.id}
            item={item}
          />
        )
      });

    return ( 
        <section className='hero'>
            <h1 className='hero--header'>Discover Airbnb adventures</h1>
            <p className='hero--text'>Multi-day trips organized by local experts with attractions, food and accommodation included in the price.</p>
            <section className='adventures-list'>
                {adventures}
            </section>
        </section>
     );
}

 