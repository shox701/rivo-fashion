import React, { useState, useEffect } from "react";

const PromotionTimer = ({ type, textClass, numberClass }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-04-06") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    let time;

    switch (type) {
        case "days":
            time = timeLeft.days;
            break;
        case "hours":
            time = timeLeft.hours;
            break;
        case "minutes":
            time = timeLeft.minutes;
            break;
        case "seconds":
            time = timeLeft.seconds;
            break;
        default:
            time = 0;
    }

    return (
        <div className="timer-item">
            <span className={numberClass}>{time}</span>
            <span className={textClass}>{type}</span>
        </div>
    );
};

export default PromotionTimer;
