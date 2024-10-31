// src/components/ImpactMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from '/images/location-pin.png'

// Define custom icon
const customIcon = new L.Icon({
    iconUrl: iconUrl, // Path to your custom marker icon
    iconSize: [30, 30],
});

const locations = [
    {
        id: 1,
        name: "Community Center - Kyaka II Refugee Settlement, Kegegwa",
        position: [0.48, 31.05],
        description: "Our center provides housing and job support."
    },
    {
        id: 2,
        name: "Youth Center - Nakivale Refugee Settlement, Isingiro",
        position: [-0.8, 30.9], 
        description: "This center focuses on youth education and mental health."
    },
    {
        id: 3,
        name: "Cultural Center - Bidi Bidi Refugee Settlement, Yumbe District",
        position: [3.53, 31.35], 
        description: "The center developes Cultural Orientation & integration in Yumbe for peace living"
    },
    {
        id: 4,
        name: "Arts & Creative Center - Achol-Pii Refugee Settlement, Agago District",
        position: [2.65865, 33.12469], 
        description: "Emotional healing through arts and creative expression like weaving, music, dance, and drama"
    }
];

const ImpactMap = () => {
    return (
        <MapContainer center={[1.3707295, 32.3032414]} zoom={7} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
            />

            {locations.map((location) => (
                <Marker key={location.id} position={location.position} icon={customIcon}>
                    <Popup>
                        <strong>{location.name}</strong>
                        <p>{location.description}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default ImpactMap;
