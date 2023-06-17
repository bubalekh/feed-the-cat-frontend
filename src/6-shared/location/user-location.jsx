import React, {useEffect} from 'react';
import {useMap, useMapEvents} from "react-leaflet";

const getCorners = (center, distance) => {
    const delta = ((180 * distance) / (Math.PI * 6371000)) / 2.5
    return [[center.lat - delta, center.lng - delta], [center.lat + delta, center.lng + delta]]
}

const UserLocation = ({setPosition}) => {

    let map = useMap()

    useEffect(() => {
        if (map) {
            map.locate()
        }
    }, [])

    map = useMapEvents({
        locationfound(e) {
            setPosition(e.latlng)
            map.fitBounds(getCorners(e.latlng, 1000))
        }
    })
};

export default UserLocation;