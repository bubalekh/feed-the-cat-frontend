import {useState} from 'react';
import {Marker} from "react-leaflet";
import CatPopup from "../cat-popup/cat-popup.jsx";
import {CatIconRed} from "./ui/cat-icon-red.jsx";
import {CatIconGreen} from "./ui/cat-icon-green.jsx";
import {CatIconYellow} from "./ui/cat-icon-yellow.jsx";

const CatMarker = ({color, position}) => {
    const [open, setOpen] = useState(false)

    let catIcon;

    switch (color) {
        case 'green':
            catIcon = CatIconGreen
            break
        case 'yellow':
            catIcon = CatIconYellow
            break;
        default:
            catIcon = CatIconRed
    }

    return position === null ? null : (
        <Marker position={position}
                icon={catIcon}
                onClick={() => setOpen(true)}>
            <CatPopup>
                Ololo
            </CatPopup>
        </Marker>
    )
}

export default CatMarker;