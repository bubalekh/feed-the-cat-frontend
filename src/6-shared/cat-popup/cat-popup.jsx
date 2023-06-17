import React from 'react';
import {Popup} from "react-leaflet";
import CatCard from "../../5-entities/cat/ui/cat-card.jsx";

const CatPopup = ({cat}) => {

    return (            //TODO: Cat card!
        <Popup autoPan={true}>
            <CatCard cat={cat}/>
        </Popup>
    )
}

export default CatPopup
