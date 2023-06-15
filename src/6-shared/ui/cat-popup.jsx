import React from 'react';
import {Popup} from "react-leaflet";
import CatCard from "../../5-entities/cat/ui/cat-card.jsx";

export default function CatPopup({children, onClick}) {

    return (            //TODO: Cat card!
        <Popup autoPan={true}>
            <CatCard />
        </Popup>
    )
}