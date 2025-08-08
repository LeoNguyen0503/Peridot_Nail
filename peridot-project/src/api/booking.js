const API_URL = import.meta.env.VITE_API_URL;
export const getBooking = async () => {
    const response = await fetch(`${API_URL}/api/bookings`);

    const booking = await response.json();

    return booking;
}

export const getBookingByEmployeeId = async (eId) => {
    const response = await fetch(`${API_URL}/api/bookings/${eId}`);

    const booking = await response.json();

    return booking;
}

export const getBookingByEmployeeIdAndDate = async (eId, dateString) => {
    const response = await fetch(`${API_URL}/api/bookings/${eId}/date?date=${dateString}`);

    const booking = await response.json();

    return booking;
}

export const getBookingByEmployeeName = async (name) => {
    const response = await fetch(`${API_URL}/api/bookings/name/${name}`);

    const booking = await response.json();

    return booking;
}

export const createBooking = async (newBooking) => {
    const response = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBooking),
    });

    const booking = await response.json();

    return booking;
}