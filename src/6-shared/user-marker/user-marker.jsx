import {Marker, Popup} from "react-leaflet";
import {UserIcon} from "./ui/user-icon.jsx";

const UserMarker = ({position}) => {

    return position === null ? null : (
        <Marker position={position}
                icon={UserIcon}>
            <Popup>
                You are here!
            </Popup>
        </Marker>
    )
}

export default UserMarker;
