import React from 'react';

export const AccommodationSection = ({item}) => {

    let badgeText;
    if(item.openSpots === 0){
        badgeText = "SOLD OUT";
    }

    return ( 
            <div className='accommodation'>
                {badgeText && <div className='accommodation--badge'>{badgeText}</div>}
            <img className='accommodation--image' src={require(`../../assets/${item.img}`)} alt="accommodation" />
            <div className='accommodation--description'>
            {item.stats.superhost && <p className='accommodation--superhost bold'> ✓ SUPERHOST</p> }
                <img className='accommodation--star' src={require("../../assets/star.png")} alt="icon" />
                <span >{item.stats.rating}</span>
                <span className='gray'> • </span>
                <span className='gray'>{item.location}</span>
            </div>
            <p className='accommodation--title'>{item.title}</p>
            <p className='accommodation--cost'><span className='bold'>From ${item.price}</span> / night</p>
        </div>
     );
};