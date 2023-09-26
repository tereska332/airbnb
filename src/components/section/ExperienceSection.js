import React from 'react';

export const ExperienceSection = ({item}) => {
    
    let badgeText;
    if(item.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(item.location === "Online"){
        badgeText = "ONLINE"
    }

    return ( 
        
        <div className='experience'>
            {badgeText && <div className='experience--badge'>{badgeText}</div>}
            <img className='experience--image' src={require(`../../assets/${item.img}`)} alt="experience" />
            <div className='experience--description'>
                <img className='experience--star' src={require("../../assets/star.png")} alt="icon" />
                <span >{item.stats.rating}</span>
                <span className='gray'>({item.stats.reviewCount})</span>
                <span className='gray'> • </span>
                <span className='gray'>{item.location}</span>
            </div>
            <p className='experience--title'>{item.title}</p>
            <p className='experience--cost'><span className='bold'>From ${item.price}</span> / person</p>
        </div>
     );
};