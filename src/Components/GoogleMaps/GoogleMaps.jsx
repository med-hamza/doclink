import React, { useEffect } from 'react'

const GoogleMaps = ({ mapId, lat, lng }) => {
    const apiKey = 'AIzaSyBm5c42s42cMTWdI2HqBKhd1CHhgww7_BA';
    useEffect(() => {
        function initMap() {
            const location = {
                lat: parseFloat(lat),
                lng: parseFloat(lng),
            };

            const mapOptions = {
                center: location,
                zoom: 15,
            };

            const map = new window.google.maps.Map(
                document.getElementById(mapId),
                mapOptions
            );

            new window.google.maps.Marker({
                position: location,
                map,
                title: "Doctor's  Location",
            });
        }
        window.initMap = initMap;

        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
            script.async = true;
            document.body.appendChild(script);
            script.onload = initMap;
        } else {
            initMap();
        }
    }, [lat, lng, mapId]);

    return <div id={mapId} style={{ height: "300px", width: "100%" }}></div>;
}

export default GoogleMaps
