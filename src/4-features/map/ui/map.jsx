import {MapContainer, TileLayer} from "react-leaflet";
import UserMarker from "../../user-marker/ui/user-marker.jsx";

const Map = () => {

    const defaultCenter = [0, 0]

    return (
        <MapContainer center={defaultCenter} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'>
            </TileLayer>
            <UserMarker />
        </MapContainer>
    )
}

export default Map