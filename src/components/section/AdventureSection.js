import React from 'react';

export const AdventureSection = ({item}) => {

    let badgeText;
    if(item.openSpots === 0){
        badgeText = "SOLD OUT";
    }

    return ( 
        <div className='adventure'>
            {badgeText && <div className='experience--badge'>{badgeText}</div>}
            <img className='adventure--image' src={require(`../../assets/${item.img}`)} alt="adventure" />
            <div className='adventure--description'>
                <img className='adventure--star' src={require("../../assets/star.png")} alt="icon" />
                <span >{item.stats.rating}</span>
                <span className='gray'>({item.stats.reviewCount})</span>
                <span className='gray'> • </span>
                <span className='gray'>{item.location}</span>
            </div>
            <p className='adventure--title'>{item.title}</p>
            <p className='adventure--cost'><span className='bold'>From ${item.price}</span> / person</p>
        </div>
     );
};