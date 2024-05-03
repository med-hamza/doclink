import { useEffect, useState } from 'react'

const useIsopen = (schedule) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const checkIsOpen = () => {
            const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
            const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            const currentDateTime = new Date(`2000-01-01 ${currentTime}`);
            if (!schedule) {
                setIsOpen(false);
                return;
            }
            const todaySchedule = schedule.find(slot => slot.day === currentDay);

            if (!todaySchedule) {
                setIsOpen(false);
                return;
            }

            const startTime = new Date(`2000-01-01 ${todaySchedule.start_time}`);
            const endTime = new Date(`2000-01-01 ${todaySchedule.end_time}`);
            setIsOpen(currentDateTime >= startTime && currentDateTime <= endTime);
        };

        checkIsOpen();
        const interval = setInterval(checkIsOpen, 60000);

        return () => clearInterval(interval);
    }, [schedule]);

    return isOpen;
};


export default useIsopen
