import React, { useEffect, useState } from 'react';

interface CountdownProps {
    startDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ startDate }) => {
    const [daysLeft, setDaysLeft] = useState<number | null>(null);

    useEffect(() => {
        const currentDate = new Date();
        const conferenceDate = new Date(startDate + ', 2023');

        if (currentDate > conferenceDate) {
            setDaysLeft(-1);
        } else {
            const timeDifference = conferenceDate.getTime() - currentDate.getTime();
            const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            setDaysLeft(daysRemaining);
        }
    }, [startDate]);

    return (
        <p className="px-2.5 py-1.5 text-sm text-black font-bold bg-[#eee] rounded-full text-center items-center">
            <p className="mr-1 w-2 h-2 animate-pulse bg-green-500 inline-flex rounded-full flex-shrink-0"></p>
            {daysLeft !== null ? (
                daysLeft === -1 ? (
                    '-'
                ) : (
                    <>
                        {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
                    </>
                )
            ) : (
                '...'
            )}
        </p>
    );
};

export default Countdown;