import {useState} from 'react';
import {Marker} from "react-leaflet";
import CatPopup from "../cat-popup/cat-popup.jsx";
import {CatIconRed} from "./ui/cat-icon-red.jsx";
import {CatIconGreen} from "./ui/cat-icon-green.jsx";
import {CatIconYellow} from "./ui/cat-icon-yellow.jsx";

function between(x, min, max) {
    return x > min && x <= max;
}

function getHoursOfLastFeed(seconds) {
    return (Date.now() / 3600000) - (seconds / 3600)
}

const CatMarker = ({cat}) => {
    const [open, setOpen] = useState(false)

    let catIcon;

    if (getHoursOfLastFeed(cat.lastTimeFed) <= 3)
        catIcon = CatIconGreen
    if (between(getHoursOfLastFeed(cat.lastTimeFed), 3, 8))
        catIcon = CatIconYellow
    if (getHoursOfLastFeed(cat.lastTimeFed) > 8)
        catIcon = CatIconRed

    return cat.position === null ? null : (
        <Marker position={cat.position}
                icon={catIcon}>
            <CatPopup cat={cat}/>
        </Marker>
    )
}

export default CatMarker;