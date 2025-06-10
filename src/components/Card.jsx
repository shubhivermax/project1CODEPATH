import React, { useState }from 'react';
import './styles.css';

const handleClick = () => {
    console.log("Button was clicked!");
  };

const [viewDetails, setViewDetails] = useState(false); // 1. create state

const Card = (props) => {
  return (
    <div className='card'>
        <div className='cardname'>{props.name}</div>
        <div className='cardloc'>{props.location}</div>
        <div className='cardtime'>{props.time}</div>
        <button className="buttonselec"  onClick={handleClick}>View Details</button>
        <img className="image1" src={props.image} alt={props.name} />

      
    </div>
  );
}

export default Card;
