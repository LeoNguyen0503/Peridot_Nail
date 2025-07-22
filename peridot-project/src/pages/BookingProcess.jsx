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
        <div className="booking-form">
            <h1>Booking {name}</h1>
            <form onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Manicure</legend>
                    <label><input type="checkbox" name="service" value="regular manicure" /> Regular</label>
                    <label><input type="checkbox" name="service" value="shellac (gel) manicure" /> Shellac (gel)</label>
                    <label><input type="checkbox" name="service" value="polish colour change" /> Polish Colour Change</label>
                    <label><input type="checkbox" name="service" value="shellac colour change" /> Shellac Colour Change</label>
                </fieldset>

                <fieldset>
                    <legend>Pedicure</legend>
                    <label><input type="checkbox" name="service" value="Regular Pedicure" /> Regular Pedicure</label>
                    <label><input type="checkbox" name="service" value="Shellac Pedicure" /> Shellac Pedicure</label>
                    <label><input type="checkbox" name="service" value="Polish Colour Change" /> Polish Colour Change</label>
                    <label><input type="checkbox" name="service" value="Shellac Colour Change" /> Shellac Colour Change</label>
                </fieldset>

                <fieldset>
                    <legend>Combo</legend>
                    <label><input type="checkbox" name="service" value="Manicure & Pedicure Regular" /> Manicure & Pedicure Regular</label>
                    <label><input type="checkbox" name="service" value="Manicure & Pedicure Shellac" /> Manicure & Pedicure Shellac</label>
                    <label><input type="checkbox" name="service" value="Shellac Manicure & Pedicure Regular" /> Shellac Manicure & Pedicure Regular</label>
                </fieldset>

                <fieldset>
                    <legend>Nails Enhancement</legend>
                    <label><input type="checkbox" name="service" value="Full Set Bio Gel" /> Full Set Bio Gel</label>
                    <label><input type="checkbox" name="service" value="Refill Bio Gel" /> Refill Bio Gel</label>
                </fieldset>

                <fieldset>
                    <legend>Add On Services</legend>
                    <label><input type="checkbox" name="service" value="French Tip" /> French Tip</label>
                    <label><input type="checkbox" name="service" value="Ombre" /> Ombre</label>
                    <label><input type="checkbox" name="service" value="Chrome" /> Chrome</label>
                    <label><input type="checkbox" name="service" value="Shellac Removal" /> Shellac Removal</label>
                    <label><input type="checkbox" name="service" value="Acrylic Removal" /> Acrylic Removal</label>
                    <label><input type="checkbox" name="service" value="Repair" /> Repair</label>
                    <label><input type="checkbox" name="service" value="Design" /> Design</label>
                </fieldset>

                <fieldset>
                    <legend>Kids 11 and Under</legend>
                    <label><input type="checkbox" name="service" value="Regular Manicure" /> Regular Manicure</label>
                    <label><input type="checkbox" name="service" value="Regular Pedicure" /> Regular Pedicure</label>
                    <label><input type="checkbox" name="service" value="Regular Combo" /> Regular Combo</label>
                    <label><input type="checkbox" name="service" value="Polish Change on Toes" /> Polish Change on Toes</label>
                    <label><input type="checkbox" name="service" value="Shellac Change on Hand" /> Shellac Change on Hand</label>
                    <label><input type="checkbox" name="service" value="Shellac Change on Toes" /> Shellac Change on Toes</label>
                </fieldset>

                <label className="date-label"> Select Date:
                    <Flatpickr
                        placeholder="Select a date"
                        options={{
                            disable: [disableWeekDays(dateNumberArray)],
                            dateFormat: "Y-m-d",
                            minDate: "today",
                        }}
                        onChange = {(date) => setSelectedDate(date[0])}
                    />
                </label>

                <TimeSlot
                    selectedDate = {selectedDate}
                    setSelectedTime={setSelectedTime}
                    availObject = {availObject}
                    employeeId = {employeeId}
                />

                <div className="form-buttons">
                    <input className="submit-button" type="submit"/>
                    <input className="reset-button" type="reset" value="Cancel"/>
                </div>


            </form>
        </div>
    )
}

export default BookingProcess;