import React from 'react';

const withDoctorSchedule = (WrappedComponent, apiResponse) => {
    const openingTimeParts = apiResponse.startTim.split(":");
    const closingTimeParts = apiResponse.endTim.split(":");

    const DOCTOR_OPENING_TIME = parseInt(openingTimeParts[0]) + parseInt(openingTimeParts[1]) / 60;
    const DOCTOR_CLOSING_TIME = parseInt(closingTimeParts[0]) + parseInt(closingTimeParts[1]) / 60;

    const INTERVAL = 30;

    return function WithDoctorSchedule(props) {
        return (
            <WrappedComponent
                {...props}
                DOCTOR_OPENING_TIME={DOCTOR_OPENING_TIME}
                DOCTOR_CLOSING_TIME={DOCTOR_CLOSING_TIME}
                INTERVAL={INTERVAL}
            />
        );
    };
};

export default withDoctorSchedule;
