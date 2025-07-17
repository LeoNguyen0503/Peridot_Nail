import { useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

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

    function disableWeekDays (daysToDisable) {
        return function (date) {
            return daysToDisable.includes(date.getDay());
        }
    }

    const dateNumberArray = dateToNum(unavailable(availability));

    return (
        <div>
            <h1>Booking {name}</h1>
            <form action="">
                <Flatpickr
                    placeholder="Select a date"
                    options={{
                        disable: [disableWeekDays(dateNumberArray)],
                        dateFormat: "Y-m-d",
                        minDate: "today",
                    }}
                />
                <br/>

                French Tip: <input type="checkbox" value="French Tip" />
            </form>

        </div>
    )
}

export default BookingProcess;