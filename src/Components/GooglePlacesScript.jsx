import React, { useEffect } from 'react';

const GooglePlacesScript = ({ onScriptLoad }) => {
    const apiKey = 'AIzaSyBm5c42s42cMTWdI2HqBKhd1CHhgww7_BA';

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.onload = () => {
            if (typeof onScriptLoad === 'function') {
                onScriptLoad();
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [onScriptLoad, apiKey]);

    return null;
};

export default GooglePlacesScript;
