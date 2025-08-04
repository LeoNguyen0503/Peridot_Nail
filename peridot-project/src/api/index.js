import {getBookingByEmployeeIdAndDate} from  './booking.js';


export const numToDay = (num) => {
    const map = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    }

    return map[num];
}

export const getBookedTimeSlot = async (employeeId, dateString) => {
    const bookingData = await getBookingByEmployeeIdAndDate(employeeId, dateString);

    console.log("bookingData: ", bookingData);
    console.log("bookingData status: ", bookingData.success);

    if (bookingData.success) {
        const booking = bookingData.data;

        if (booking.length === 0) {
            return null;
        } else {
            const numDateInWeek = new Date(booking[0].date).getDay();
            const dateInWeek = numToDay(numDateInWeek);
            const bookedTimeSlot = [];
            for (let i = 0; i < booking.length; i++) {
                bookedTimeSlot.push(booking[i].time);
            }

            return {time: bookedTimeSlot, day: dateInWeek};
        }
    } else {
        console.warn("booking look up fail")
        return null;
    }
}



