import React from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

import { Accommodation } from './components/Accommodation';
import { Adventure } from './components/Adventure';
import { Experience } from './components/Experience';

const App = () => {

  return ( 
    <>
      <Navbar/> 
      <Hero/>
      <Experience/>
      <Accommodation/>
      <Adventure/>
      <Footer/>
    </>
   );
}
 
export default App;