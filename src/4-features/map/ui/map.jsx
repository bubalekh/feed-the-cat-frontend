import {MapContainer, TileLayer} from "react-leaflet";
import UserMarker from "../../../6-shared/user-marker/user-marker.jsx";
import CatMarker from "../../../6-shared/cat-marker/cat-marker.jsx";
import {useState} from "react";
import {CatModel} from "../../../5-entities/cat/model.jsx";
import UserLocation from "../../../6-shared/location/user-location.jsx";

const Map = () => {

    const defaultCenter = [0, 0]
    const [position, setPosition] = useState(null)
    const [cats, setCats] = useState([
        new CatModel('Boris', 'Хороший кот Boris', [40.184151, 44.5136119], 1686007102),
        new CatModel('Vasya', 'Хороший кот Vasya', [40.186443, 44.5133322], 1686995195),
        new CatModel('Sirena', 'Дурная кошка Sirena', [40.19347406640488, 44.48859810580707], 1687007102),
        new CatModel('Пиратка', 'Хорошая кошка Пиратка', [40.19355499623685, 44.48864303280659], 1687007102),
    ])

    return (
        <MapContainer center={defaultCenter}
                      zoom={16}
                      scrollWheelZoom={false}
                      zoomDelta={0.25}
                      zoomSnap={0}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <UserLocation setPosition={setPosition}/>
            <UserMarker position={position}/>
            {cats.map(cat =>
                <CatMarker key={cat.name} cat={cat}/>
            )}
        </MapContainer>
    )
}

export default Map
