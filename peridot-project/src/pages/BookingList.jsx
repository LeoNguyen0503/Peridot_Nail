import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBooking, getBookingByEmployeeName} from "../api/booking.js";
import { numToDay } from "../api/index.js";

function BookingList() {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [employee, setEmployee] = sessionStorage.getItem("admin") ? useState("all-booking") : useState(sessionStorage.getItem("employeeName"));
    const WS_URL = import.meta.env.VITE_WS_URL;
    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("credential") || sessionStorage.getItem("admin");
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

        const ws = new WebSocket(WS_URL);

        ws.onopen = () => {console.log("WebSocket Open");};

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.type === "NEW_BOOKING") {
                if (sessionStorage.getItem("admin")) {
                    setBookings(prev => [data.payload, ...prev]);
                    setFilteredBookings(prev => [data.payload, ...prev]);
                } else {
                    const name = sessionStorage.getItem("employeeName");
                    if (name === data.payload.employeeName){
                        setFilteredBookings(prev => [data.payload, ...prev]);
                    }
                }
            }
        }

        return () => {
            isCancelled = true;
            ws.close();
        };
    }, []);


    async function fetchAllBookings(flag) {
        const booked = await getBooking();

        if (!flag && booked.success) {
            setBookings(booked.data);
            setFilteredBookings(booked.data);
        } else {
            console.log("error: " + booked.message);
        }
    }

    async function fetchBookingWithName (name, flag) {
        const booked = await getBookingByEmployeeName(name);

        if (!flag && booked.success) {
            setFilteredBookings(booked.data);
        } else {
            console.log("error: " + booked.message);
        }
    }

    const handleClick = (event) => {
        const value = event.target.value;
        const newBookingData = bookings.filter((booking) => booking.employeeName === value);
        if (newBookingData.length > 0) {
            setFilteredBookings(newBookingData);
        } else {
            setFilteredBookings(bookings);
        }
        console.log("set new bookingData");
    }

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/auth");
    }

    return  (
        <div className="fetch-booking">
            <h2>All Bookings</h2>
            {sessionStorage.getItem("admin") && (<select name="employee" id="employee" onChange={handleClick}>
                <option value="all-booking">All Booking</option>
                {/*<option value="Jane">Jane</option>*/}
                <option value="Trieu">Trieu</option>
            </select>)}
            <p>choose: {employee}</p>
            <div className="booking-list">
                {filteredBookings.length > 0 ? (
                    filteredBookings.map((booking, index) => (
                        <div className="booking-card" key={index}>
                            <h3>
                                {booking.dateString} ({numToDay(new Date(booking.date).getDay())}) @ {booking.time} for {booking.employeeName}
                            </h3>
                            <p><strong>Phone:</strong> {booking.phone}</p>
                            <p>
                                <strong>Manicure:</strong> {booking.services.manicure.length > 0 ? booking.services.manicure.join(", ") : "N/A"}
                            </p>
                            <p>
                                <strong>Pedicure:</strong> {booking.services.pedicure.length > 0 ? booking.services.pedicure.join(", ") : "N/A"}
                            </p>
                            <p>
                                <strong>Combo:</strong> {booking.services.combo.length > 0 ? booking.services.combo.join(", ") : "N/A"}
                            </p>
                            <p>
                                <strong>Nails Enhancement:</strong> {booking.services.nailsEnhancement.length > 0 ? booking.services.nailsEnhancement.join(", ") : "N/A"}
                            </p>
                            <p>
                                <strong>Add On:</strong> {booking.services.addOn.length > 0 ? booking.services.addOn.join(", ") : "N/A"}
                            </p>
                            <p>
                                <strong>Kids:</strong> {booking.services.kids.length > 0 ? booking.services.kids.join(", ") : "N/A"}
                            </p>
                        </div>
                    ))
                ) : (
                    <p style={{ color: "red" }}>There is no booking.</p>
                )}
            </div>
            <br/>
            <button onClick={handleLogout}>Log out</button>
        </div>

    )
}

export default BookingList