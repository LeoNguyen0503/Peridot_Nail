import { useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import {useState} from "react";
import TimeSlot from "../components/TimeSlot.jsx";
import {createBooking} from "../api/booking.js"

function BookingProcess(props) {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const location = useLocation();
    const { name, availability, availObject, employeeId } = location.state || {};

    const unavailable = (date) => {
        const dateInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        const unavailableDate = [];
        for (let i = 0; i < dateInWeek.length; i++){
            if (date.indexOf(dateInWeek[i]) === -1){
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const checkedServices = Array.from(document.querySelectorAll('input[name="service"]:checked')).map(input => input.value);

        console.log("services: ", checkedServices);

        if (!selectedTime || !selectedDate || checkedServices.length ===0){
            alert("Please select date, time and at least one service");
        }

        const booking = {
            employeeId: employeeId,
            date: selectedDate,
            dateString: selectedDate.toLocaleDateString(),
            time: selectedTime,
            services: checkedServices
        }

        try {
            const data = await createBooking(booking);
            if (data.success) {
                alert ("Booked Successfully!");
            }else {
                alert("Booking Failed! " + data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Error while creating booking!");
        }

    }

    

    return (
        <div>
            <h1>Booking {name}</h1>
            <form onSubmit={handleSubmit}>

                <br/>
                <p>Service:</p>

                <p>Manicure: </p>

                Regular: <input type="checkbox" name="service" value="regular manicure" /><br/>
                Shellac (gel): <input type="checkbox" name="service" value="shellac (gel) manicure" /><br/>
                Polish Colour Change: <input type="checkbox" name="service" value="polish colour change" /><br/>
                Shellac Colour Change: <input type="checkbox" name="service" value="shellac colour change" /><br/>
                <p>Pedicure</p>
                Regular Pedicure: <input type="checkbox" name="service" value="Regular Pedicure" /><br/>
                Shellac Pedicure: <input type="checkbox" name="service" value="Shellac Pedicure" /><br/>
                Polish Colour Change: <input type="checkbox" name="service" value="Polish Colour Change" /><br/>
                Shellac Colour Change: <input type="checkbox" name="service" value="Shellac Colour Change" /><br/>
                <p>Combo</p>
                Manicure & Pedicure Regular: <input type="checkbox" name="service" value="Manicure & Pedicure Regular" /><br/>
                Manicure & Pedicure Shellac: <input type="checkbox" name="service" value="Manicure & Pedicure Shellac" /><br/>
                Shellac Manicure & Pedicure Regular: <input type="checkbox" name="service" value="Shellac Manicure & Pedicure Regular" /><br/>
                <p>Nails Enhancement</p>
                Full Set Bio Gel: <input type="checkbox" name="service" value="Full Set Bio Gel" /><br/>
                Refill Bio Gel: <input type="checkbox" name="service" value="Refill Bio Gel" /><br/>
                <p>Add On Services</p>
                French Tip: <input type="checkbox" name="service" value="French Tip" /><br/>
                Ombre: <input type="checkbox" name="service" value="Ombre" /><br/>
                Chrome: <input type="checkbox" name="service" value="Chrome" /><br/>
                Shellac Removal: <input type="checkbox" name="service" value="Shellac Removal" /><br/>
                Acrylic Removal: <input type="checkbox" name="service" value="Acrylic Removal" /><br/>
                Repair: <input type="checkbox" name="service" value="Repair" /><br/>
                Design: <input type="checkbox" name="service" value="Design" /><br/>
                <p>Kids 11 and Under</p>
                Regular Manicure: <input type="checkbox" name="service" value="Regular Manicure" /><br/>
                Regular Pedicure: <input type="checkbox" name="service" value="Regular Pedicure" /><br/>
                Regular Combo: <input type="checkbox" name="service" value="Regular Combo" /><br/>
                Polish Change on Toes: <input type="checkbox" name="service" value="Polish Change on Toes" /><br/>
                Shellac Change on Hand: <input type="checkbox" name="service" value="Shellac Change on Hand" /><br/>
                Shellac Change on Toes: <input type="checkbox" name="service" value="Shellac Change on Toes" /><br/>

                <Flatpickr
                    placeholder="Select a date"
                    options={{
                        disable: [disableWeekDays(dateNumberArray)],
                        dateFormat: "Y-m-d",
                        minDate: "today",
                    }}
                    onChange = {(date) => setSelectedDate(date[0])}
                />

                <TimeSlot
                    selectedDate = {selectedDate}
                    setSelectedTime={setSelectedTime}
                    availObject = {availObject}
                    employeeId = {employeeId}
                />

                <input type="submit"/>
                <input type="reset"/>


            </form>

            <p>selected time: {selectedTime}</p>
        </div>
    )
}

export default BookingProcess;