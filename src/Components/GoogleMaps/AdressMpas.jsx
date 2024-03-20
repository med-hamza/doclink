import React, { useEffect, useState } from 'react'
import dataLocation from '../../utils/dataLocation';
const AdressMpas = ({ mapId }) => {
    const apiKey = 'AIzaSyBm5c42s42cMTWdI2HqBKhd1CHhgww7_BA';
    const [selectedLocation, setSelctedLocation] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const getRandomLocation = () => {
            const randomIndex = Math.floor(Math.random() * dataLocation.length);
            return dataLocation[randomIndex]
        };
        setSelctedLocation(getRandomLocation());
    }, [])


    useEffect(() => {
        function initMap() {
            const location = {
                lat: parseFloat(selectedLocation.lat),
                lng: parseFloat(selectedLocation.lng),
            };

            const mapOptions = {
                center: location,
                zoom: 15,
            };

            const mapDiv = document.getElementById(mapId);
            if (!mapDiv) return;

            const map = new window.google.maps.Map(
                mapDiv,
                mapOptions
            );

            new window.google.maps.Marker({
                position: location,
                map,
                title: "Doctor's Location",
            });
        }
        window.initMap = initMap;
        if (!window.google || !window.google.maps.Map) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
            script.async = true;
            script.defer = true;
            script.onload = initMap;
            document.body.appendChild(script);
        } else {
            initMap();
        }
    }, [mapId, apiKey, selectedLocation]);

    return <div id={mapId} className='w-full h-[800px]'></div>;
}
export default AdressMpas
