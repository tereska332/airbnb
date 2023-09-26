import React from 'react';

export const Navbar = () => {
    return ( 
        <nav className='nav'>
            <img className='nav--logo' src={require("../assets/logo.jpg")} alt='logo' />
            <p className='nav--text'>Airbnb your place</p>
        </nav>
     );
}


