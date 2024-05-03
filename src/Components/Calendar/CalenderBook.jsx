import React, { useState } from 'react'
import ReactCalendar from 'react-calendar'
import { add, format, startOfWeek, endOfWeek } from 'date-fns'
import { DOCTOR_CLOSING_TIME, DOCTOR_OPENING_TIME, INTERVAL } from '../../constants/config';
const Calendar = () => {
    const [date, setDate] = useState({
        justDate: null,
        dateTime: null,
    });

    const currentDate = new Date();
    const startOfCurrentWeek = startOfWeek(currentDate);
    const endOfCurrentWeek = endOfWeek(currentDate);
    const disableDates = ({ date }) => {
        const startOfCurrentWeek = startOfWeek(new Date());
        const endOfCurrentWeek = endOfWeek(new Date());
        return date < startOfCurrentWeek || date > endOfCurrentWeek;
    }





    const getTimes = () => {
        if (!date.justDate) return
        const { justDate } = date
        const beginning = add(justDate, { hours: DOCTOR_OPENING_TIME })
        const end = add(justDate, { hours: DOCTOR_CLOSING_TIME })
        const interval = INTERVAL
        const times = []
        for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
            times.push(i)
        }
        return times
    }
    const times = getTimes()
    console.log(date.dateTime)
    return (
        <div>
            {date.justDate ? (
                <div className=' grid grid-cols-4 gap-4 justify-center'>
                    {times?.map((time, i) => (
                        <div key={`time ${i}`} className=' bg-gray-200 text-center p-2 rounded-md'>
                            <button onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}>
                                {format(time, 'kk:mm')}
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <ReactCalendar
                    className='p-2'
                    tileClassName={disableDates}
                    onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
                />)}

        </div>
    )
}

export default Calendar
