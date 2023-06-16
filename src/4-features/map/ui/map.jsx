import {MapContainer, TileLayer} from "react-leaflet";
import UserMarker from "../../../6-shared/user-marker/user-marker.jsx";
import CatMarker from "../../../6-shared/cat-marker/cat-marker.jsx";

const Map = () => {

    const defaultCenter = [0, 0]

    return (
        <MapContainer center={defaultCenter} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <UserMarker />
            <CatMarker color='yellow' position={[40.184151, 44.5136119]}/>
            <CatMarker color='green' position={[40.186443, 44.5133322]}/>
            <CatMarker color='red' position={[40.187311, 44.5154967]}/>
        </MapContainer>
    )
}

export default Map