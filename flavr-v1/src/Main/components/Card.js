/**
 *
 * Get data
 */
import React from 'react';

const Card = (props)=>{

    return(
    <div>
        <h2>{props.name}</h2>
        <p>{(props.volume ? props.volume : "" )}</p>
        <p>{(props.season ? props.season : "" )}</p>
    </div>
    )
};

export default Card