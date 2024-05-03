import React, { useState } from 'react'
import {
    format,
    startOfWeek,
    add,
    addDays,
    isSameDay,
    lastDayOfWeek,
    getWeek,
    addWeeks,
    subWeeks
} from "date-fns";
import useIsopen from '../../hooks/useIsopen';
import TimeSlots from './TimeSlots';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


const CalenderWeek = ({ itemData, availitemData }) => {
    const isOpen = useIsopen(availitemData ? availitemData.schedule : []);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDayTimes, setSelectedDayTimes] = useState(null);
    const [date, setDate] = useState({
        justDate: null,
        dateTime: null,
    });

    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todaySchedule = availitemData ? availitemData.schedule.find(slot => slot.day === currentDay) : null;
    const startTim = todaySchedule ? todaySchedule.start_time : '';
    const endTim = todaySchedule ? todaySchedule.end_time : '';

    const apiResponse = {
        startTim,
        endTim
    };

    const openingTimeParts = apiResponse.startTim.split(":");
    const closingTimeParts = apiResponse.endTim.split(":");

    const DOCTOR_OPENING_TIME = parseInt(openingTimeParts[0]) + parseInt(openingTimeParts[1]) / 60;
    const DOCTOR_CLOSING_TIME = parseInt(closingTimeParts[0]) + parseInt(closingTimeParts[1]) / 60;

    const INTERVAL = 30;

    const getTimes = (selectedDay) => {
        if (!selectedDay) return [];

        const { justDate } = selectedDay;
        const beginning = add(justDate, { hours: DOCTOR_OPENING_TIME });
        const end = add(justDate, { hours: DOCTOR_CLOSING_TIME });
        const interval = INTERVAL;
        const times = [];

        let currentTime = beginning;
        while (currentTime <= end) {
            times.push(currentTime);
            currentTime = add(currentTime, { minutes: interval });
        }

        return times;
    };


    const changeWeekHandle = (btnType) => {
        if (btnType === "prev") {
            setCurrentMonth(subWeeks(currentMonth, 1));
            setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
        }
        if (btnType === "next") {
            setCurrentMonth(addWeeks(currentMonth, 1));
            setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
        }
    };

    const onDateClickHandle = (day, dayStr, times) => {
        setSelectedDate(day);
        setDate({ justDate: day, dateTime: times });
        setSelectedDayTimes(times);
    };


    const handleDayClick = (day) => {
        const dayStr = format(day, "ccc dd MMM yy");
        const times = getTimes({ justDate: day });
        onDateClickHandle(day, dayStr, times);

    };


    const renderHeader = () => {
        const dateFormat = "MMM yyyy";
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={() => changeWeekHandle("prev")}>
                        <MdKeyboardArrowLeft />
                    </div>
                </div>
                <div className="col col-center">
                    <span>{format(currentMonth, dateFormat)}</span>
                </div>
                <div className="col col-end" onClick={() => changeWeekHandle("next")}>
                    <div className="icon"><MdKeyboardArrowRight /></div>
                </div>
            </div>
        );
    };
    const renderDays = () => {
        const dateFormat = "EEE";
        const days = [];
        let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    };


    const renderCells = () => {
        const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
        const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
        const dateFormat = "d";
        const rows = [];
        let day = startDate;

        while (day <= endDate) {
            const days = [];
            for (let i = 0; i < 7; i++) {
                const formattedDate = format(day, dateFormat);
                const cloneDay = day;

                days.push(
                    <div
                        className={`col cell ${isSameDay(day, new Date())
                            ? "today"
                            : isSameDay(day, selectedDate)
                                ? "selected"
                                : ""}`}
                        key={day}
                        onClick={() => handleDayClick(cloneDay)}
                    >
                        <span className="number">{formattedDate}</span>


                    </div>
                );
                day = addDays(day, 1);
            }

            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
        }

        return <div className="body">{rows}</div>;
    };



    return (
        <div>
            <h2 className='text-primary text-xl font-semibold mb-4'>Choose Time Slot</h2>
            <div className='calendar'>
                {renderHeader()}
                {renderDays()}
                {renderCells()}

                <div className=' mt-4 p-2 mb-4'>
                    {isOpen ? (
                        <>
                            {selectedDayTimes && <TimeSlots timeSlots={selectedDayTimes} />}
                        </>
                    ) : (
                        <>
                            {selectedDayTimes ? <p>NO TIME FOR THE MOMENT</p> : null}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalenderWeek
