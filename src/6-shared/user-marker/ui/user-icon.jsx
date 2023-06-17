import Leaflet from "leaflet";
import icon from "../../../../assets/human.svg"

export const UserIcon = new Leaflet.Icon({
    iconUrl: icon,
    className: "svg-icon",
    iconAnchor: [24, 32],
    popupAnchor: [0, -32],
    iconSize: [48, 48]
})
