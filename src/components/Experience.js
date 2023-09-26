import React from 'react';

import { ExperienceSection } from './section/ExperienceSection';

import { dataExperience } from '../data/experience-data';

export const Experience = () => {

    const experiences = dataExperience.map(item => {
        return(
          <ExperienceSection key={item.id}
            item={item}
          />
        )
      })


    return ( 
        <section className='hero'>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            <section className='experiences-list'>
                {experiences}
            </section>
        </section>
     );
};