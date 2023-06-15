import iconUrl from "../../../../assets/vite.svg";
import Leaflet from "leaflet";

export const UserIcon = new Leaflet.Icon({
    iconUrl,
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    iconSize: [32, 32]
})

