import { useLocation } from "react-router-dom";

function BookingProcess(props) {

    const location = useLocation();
    const { name, availability } = location.state || {};

    const unavailable = (date) => {
        const dateInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        const unavailableDate = [];
        for (let i = 0; i < dateInWeek.length; i++){
            if (date.indexOf(dateInWeek[i]) == -1){
                unavailableDate.push(dateInWeek[i]);
            }
        }
        return unavailableDate;
    }

    const dateToNum = (date) => {
        const map = {
            "Sun": 0,
            "Mon": 1,
            "Tue": 2,
            "Wed": 3,
            "Thu": 4,
            "Fri": 5,
            "Sat": 6
        }

        const res = [];

        for (let i = 0; i < date.length; i++){
            res.push(map[date[i]]);
        }

        return res;
    }

    return (
        <div>
            <h1>Booking {name}</h1>
            <p>availability: {availability}</p>
            <p>Unavailable: {unavailable(availability).toString()}</p>
            <p>Unavailable date to Number: {dateToNum(unavailable(availability)).toString()}</p>
            {/*<input type="date"/>*/}
        </div>
    )
}

export default BookingProcess;