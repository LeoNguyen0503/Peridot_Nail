import { useLocation,useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import {useState} from "react";
import TimeSlot from "../components/TimeSlot.jsx";
import {createBooking} from "../api/booking.js"

function BookingProcess(props) {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const navigate = useNavigate();
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

        const categories = ["manicure", "pedicure", "combo", "nailsEnhancement", "addOn", "kids"];

        const checkedServices = {}

        for (const category of categories) {
            const input = document.querySelectorAll(`input[name=${category}]:checked`);
            checkedServices[category] = Array.from(input).map(item => item.value);
        }

        const phone = document.querySelector("input[name=phone]").value;

        console.log("services: ", checkedServices);

        if (!selectedTime || !selectedDate || checkedServices.length ===0){
            alert("Please select date, time and at least one service");
            return;
        }

        if (phone.length === 0){
            alert("Please enter your phone number");
            return;
        }

        const regex = /^\d{3}-\d{3}-\d{4}$/

        if (!regex.test(phone)){
            alert("Please enter a valid phone number");
            return;
        }

        const booking = {
            employeeId: employeeId,
            employeeName: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
            date: selectedDate,
            dateString: selectedDate.toLocaleDateString(),
            time: selectedTime,
            services: checkedServices,
            phone: phone
        }

        try {
            const data = await createBooking(booking);
            if (data.success) {
                alert ("Booked Successfully!");
                navigate("/");
            }else {
                alert("Booking Failed! " + data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Error while creating booking!");
        }

    }

    const handleButtonClick = (time) => {
        setSelectedTime(time);

    }

    return (
        <div className="booking-form">
            <h1>Booking {name}</h1>
            <form onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Manicure</legend>
                    <label><input type="checkbox" name="manicure" value="Regular Manicure" /> Regular</label>
                    <label><input type="checkbox" name="manicure" value="Shellac (Gel) Manicure" /> Shellac (gel)</label>
                    <label><input type="checkbox" name="manicure" value="Polish Colour Change" /> Polish Colour Change</label>
                    <label><input type="checkbox" name="manicure" value="Shellac Colour Change" /> Shellac Colour Change</label>
                </fieldset>

                <fieldset>
                    <legend>Pedicure</legend>
                    <label><input type="checkbox" name="pedicure" value="Regular Pedicure" /> Regular Pedicure</label>
                    <label><input type="checkbox" name="pedicure" value="Shellac Pedicure" /> Shellac Pedicure</label>
                    <label><input type="checkbox" name="pedicure" value="Polish Colour Change" /> Polish Colour Change</label>
                    <label><input type="checkbox" name="pedicure" value="Shellac Colour Change" /> Shellac Colour Change</label>
                </fieldset>

                <fieldset>
                    <legend>Combo</legend>
                    <label><input type="checkbox" name="combo" value="Manicure & Pedicure Regular" /> Manicure & Pedicure Regular</label>
                    <label><input type="checkbox" name="combo" value="Manicure & Pedicure Shellac" /> Manicure & Pedicure Shellac</label>
                    <label><input type="checkbox" name="combo" value="Shellac Manicure & Pedicure Regular" /> Shellac Manicure & Pedicure Regular</label>
                </fieldset>

                <fieldset>
                    <legend>Nails Enhancement</legend>
                    <label><input type="checkbox" name="nailsEnhancement" value="Full Set Bio Gel" /> Full Set Bio Gel</label>
                    <label><input type="checkbox" name="nailsEnhancement" value="Refill Bio Gel" /> Refill Bio Gel</label>
                </fieldset>

                <fieldset>
                    <legend>Add On Services</legend>
                    <label><input type="checkbox" name="addOn" value="French Tip" /> French Tip</label>
                    <label><input type="checkbox" name="addOn" value="Ombre" /> Ombre</label>
                    <label><input type="checkbox" name="addOn" value="Chrome" /> Chrome</label>
                    <label><input type="checkbox" name="addOn" value="Shellac Removal" /> Shellac Removal</label>
                    <label><input type="checkbox" name="addOn" value="Acrylic Removal" /> Acrylic Removal</label>
                    <label><input type="checkbox" name="addOn" value="Repair" /> Repair</label>
                    <label><input type="checkbox" name="addOn" value="Design" /> Design</label>
                </fieldset>

                <fieldset>
                    <legend>Kids 11 and Under</legend>
                    <label><input type="checkbox" name="kids" value="Regular Manicure" /> Regular Manicure</label>
                    <label><input type="checkbox" name="kids" value="Regular Pedicure" /> Regular Pedicure</label>
                    <label><input type="checkbox" name="kids" value="Regular Combo" /> Regular Combo</label>
                    <label><input type="checkbox" name="kids" value="Polish Change on Toes" /> Polish Change on Toes</label>
                    <label><input type="checkbox" name="kids" value="Shellac Change on Hand" /> Shellac Change on Hand</label>
                    <label><input type="checkbox" name="kids" value="Shellac Change on Toes" /> Shellac Change on Toes</label>
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
                    selectedTime = {selectedTime}
                    setSelectedTime={setSelectedTime}
                    availObject = {availObject}
                    employeeId = {employeeId}
                />

                <fieldset>
                    <legend>Enter your phone number:</legend>
                    <label><input type="text" name="phone" placeholder="Eg: 123-456-7890"/></label>
                </fieldset>

                <div className="form-buttons">
                    <input className="submit-button" type="submit" value="Submit"/>
                    <input className="reset-button" type="reset" value="Cancel"/>
                </div>


            </form>
        </div>
    )
}

export default BookingProcess;