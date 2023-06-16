import {useEffect} from 'react';
import {Marker, useMap, useMapEvents} from "react-leaflet";
import {UserIcon} from "./ui/user-icon.jsx";

const UserMarker = ({position,setPosition}) => {
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
                icon={UserIcon}>
        </Marker>
    )
}

export default UserMarker;