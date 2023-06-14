import {useEffect, useState} from 'react';
import {Marker, Popup, useMap, useMapEvents} from "react-leaflet";

const UserMarker = () => {
    const [position, setPosition] = useState(null)
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
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export default UserMarker;