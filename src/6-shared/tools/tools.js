import {off} from "leaflet/src/dom/DomEvent.js";

export function getHoursOfLastFeed(seconds) {
    return Math.floor((Date.now() / 1000 - seconds) / 3600)
}

export function between(x, min, max) {
    return x > min && x <= max;
}

export function toDate(seconds) {
    const t = new Date(1970, 0, 1); // Epoch
    const offset = t.getTimezoneOffset() * 60
    t.setSeconds(seconds - offset);
    return t.toLocaleString(undefined, {
        hour:   '2-digit',
        minute: '2-digit',
        hour12: false,
        day:   '2-digit',
        month: '2-digit',
        year:  'numeric'
    })
}