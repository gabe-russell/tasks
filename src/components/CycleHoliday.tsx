import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = ["🎉", "❤️", "🎃", "🦃", "🎄"];

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState(0);

    const nextHolidayByDate = (index: number): number => {
        return (index + 1) % holidays.length;
    };

    const nextHolidayAlphabetically = (index: number): number => {
        const sortedHolidays = [...holidays].sort();
        const nextIndex = sortedHolidays.indexOf(holidays[index]) + 1;
        return holidays.indexOf(sortedHolidays[nextIndex % holidays.length]);
    };

    return (
        <div>
            <p>Holiday: {holidays[holiday]}</p>
            <Button
                onClick={() => setHoliday(nextHolidayAlphabetically(holiday))}
            >
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(nextHolidayByDate(holiday))}>
                Advance by Year
            </Button>
        </div>
    );
}
