import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBooking, getBookingByEmployeeName} from "../api/booking.js";
import { numToDay } from "../api/index.js";

function BookingList() {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [employee, setEmployee] = useState("all-booking");

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("credential");
        if (!isLoggedIn) {
            navigate("/auth");
        }
    }, [navigate]);

    useEffect(() => {
        let isCancelled = false;

        const loadBookings = async () => {
            if (employee === "all-booking") {
                await fetchAllBookings(isCancelled);
            } else {
                await fetchBookingWithName(employee, isCancelled);
            }
        };

        loadBookings();

        return () => {
            isCancelled = true;
        };
    }, [employee]);

    async function fetchAllBookings(flag) {
        const booked = await getBooking();

        if (!flag && booked.success) {
            setBookings(booked.data);
        } else {
            console.log("error: " + booked.message);
        }
    }

    async function fetchBookingWithName (name, flag) {
        const booked = await getBookingByEmployeeName(name);

        if (!flag && booked.success) {
            setBookings(booked.data);
        } else {
            console.log("error: " + booked.message);
        }
    }

    const handleClick = (event) => {
        setEmployee(event.target.value);
    }

    return  (
        <div className="fetch-booking">
            <h2>All Bookings</h2>
            <select name="employee" id="employee" onChange={handleClick}>
                <option value="all-booking">All Booking</option>
                <option value="Jane">Jane</option>
                <option value="Trieu">Trieu</option>
            </select>
            <p>choose: {employee}</p>
            <div className="booking-list">
                {bookings.map((booking, index) => (
                    <div className="booking-card" key={index}>
                        <h3>{booking.dateString} ({numToDay(new Date(booking.date).getDay())}) @ {booking.time} for {booking.employeeName}</h3>
                        <p><strong>Phone:</strong> {booking.phone}</p>
                        <p><strong>Manicure:</strong> {booking.services.manicure.length > 0 ? booking.services.manicure.join(", ") : "N/A"}</p>
                        <p><strong>Pedicure:</strong> {booking.services.pedicure.length > 0 ? booking.services.pedicure.join(", ") : "N/A"}</p>
                        <p><strong>Combo:</strong> {booking.services.combo.length > 0 ? booking.services.combo.join(", ") : "N/A"}</p>
                        <p><strong>Nails Enhancement:</strong> {booking.services.nailsEnhancement.length > 0 ? booking.services.nailsEnhancement.join(", ") : "N/A"}</p>
                        <p><strong>Add On:</strong> {booking.services.addOn.length > 0 ? booking.services.addOn.join(", ") : "N/A"}</p>
                        <p><strong>Kids:</strong> {booking.services.kids.length > 0 ? booking.services.kids.join(", ") : "N/A"}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default BookingList