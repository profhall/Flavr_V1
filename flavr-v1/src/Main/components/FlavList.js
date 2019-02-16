/**
 *
 * Get data
 */
import React from 'react';
import Card from './Card';

const FlavList = (props)=>{

    const flavList = props.flavs.map((flavor,i) => {
        // console.log(flavor.name, flavor.Volume, flavor.Season);
        //this is wear i make a card item and send in the properties from the flavor object keys
        //<Card name={flavor.name} volume={flavor.volume} season={flavor.season}/>
        return <Card key={i} what={flavor.What_it_is} name={flavor.name} volume={flavor.Volume} season={flavor.Season}/>
    })

    return <div > {flavList} </div>
}

export default FlavList