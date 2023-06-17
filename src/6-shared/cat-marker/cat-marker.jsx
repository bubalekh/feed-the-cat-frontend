import {Marker} from "react-leaflet";
import CatPopup from "../cat-popup/cat-popup.jsx";
import {CatIconRed} from "./ui/cat-icon-red.jsx";
import {CatIconGreen} from "./ui/cat-icon-green.jsx";
import {CatIconYellow} from "./ui/cat-icon-yellow.jsx";
import {between, getHoursOfLastFeed} from "../tools/tools.js";

const CatMarker = ({cat}) => {
    let catIcon = CatIconRed
    if (getHoursOfLastFeed(cat.lastTimeFed) <= 3)
        catIcon = CatIconGreen
    if (between(getHoursOfLastFeed(cat.lastTimeFed), 3, 8))
        catIcon = CatIconYellow
    return cat.position === null ? null : (
        <Marker position={cat.position}
                icon={catIcon}>
            <CatPopup cat={cat}/>
        </Marker>
    )
}

export default CatMarker;
