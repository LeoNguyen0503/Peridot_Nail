import {useEffect, useReducer, useState} from "react";
import {getBookedTimeSlot, numToDay} from "../api/index.js";


function TimeSlot( { selectedDate, selectedTime, setSelectedTime, employeeId, availObject } ){

    const [timeSlot, setTimeSlot] = useState(null);
    const [availTime, setAvailTime] = useState([]);

    useEffect(() => {
        let isCancelled = false;
        const fetchTimeSlot = async () => {

            if (!selectedDate || !employeeId || !availObject) {
                console.log("Waiting for all props...");
                return;
            }

            setTimeSlot(null);

            const dateString = selectedDate.toLocaleDateString();
            const slot = await getBookedTimeSlot(employeeId, dateString);

            if (!isCancelled) {
                if (slot) {
                    console.log("Time slot: ", slot);
                    setTimeSlot(slot);
                } else {
                    console.log(`No time slot found...`);
                }
            }
        }

        fetchTimeSlot();

        return () => {
            isCancelled = true;
        }
    },[selectedDate])

    useEffect(() => {

        if (!selectedDate){
            return;
        }

        if (!timeSlot) {
            const dateNum = selectedDate.getDay();
            const dateInWeek = numToDay(dateNum);
            console.log("day: ", dateInWeek);

            for (let i = 0; i < availObject.length; i++){
                if (availObject[i].day === dateInWeek) {
                    setAvailTime(availObject[i].hours);
                }
            }
        } else {
            console.log("There is booked time slot");
            const booked = timeSlot.time;
            const day = timeSlot.day;
            let fullTimeSlot = null;

            for (let i = 0; i < availObject.length; i++){
                if (availObject[i].day === day) {
                    fullTimeSlot = availObject[i].hours;
                }
            }

            const availableSlot = fullTimeSlot.filter(time => !booked.includes(time));

            setAvailTime(availableSlot);
        }
    },[selectedDate, timeSlot]);




    return(
        <div className="time-slot-container">
            {availTime.length > 0 && (
                <ul className="time-slot-list">
                    {availTime.map((time, index) => (
                        <li key={index}>
                            <button
                                type="button"
                                className={`time-slot-button ${selectedTime === time ? "selected" : ""}`}
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        
    )

}

export default TimeSlot;