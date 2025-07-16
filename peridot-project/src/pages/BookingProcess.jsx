import { useLocation } from "react-router-dom";

function BookingProcess(props) {

    const location = useLocation();
    const { name } = location.state || {};

    return (
        <div>
            <h1>Booking {name}</h1>
            {/*<input type="date"/>*/}
        </div>
    )
}

export default BookingProcess;