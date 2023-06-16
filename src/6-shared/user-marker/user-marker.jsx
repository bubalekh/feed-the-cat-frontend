import {useEffect, useState} from 'react';
import {Marker, Popup, useMap, useMapEvents} from "react-leaflet";
import {UserIcon} from "./ui/user-icon.jsx";
import CatPopup from "../cat-popup/cat-popup.jsx";

const UserMarker = () => {
    const [position, setPosition] = useState(null)
    const [open, setOpen] = useState(false)
    let map = useMap()

    useEffect(() => {
        if (map) {
            map.locate()
        }
    }, [])

    map = useMapEvents({
        locationfound(e) {
            setPosition(e.latlng)
            map.setView(e.latlng)
        }
    })

    return position === null ? null : (
        <Marker position={position}
                icon={UserIcon}
                onClick={() => setOpen(true)}>
        </Marker>
    )
}

export default UserMarker;