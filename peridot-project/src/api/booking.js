
export const getBooking = async () => {
    const response = await fetch("/api/bookings");

    const booking = await response.json();

    return booking;
}

export const getBookingByEmployeeId = async (eId) => {
    const response = await fetch(`/api/bookings/${eId}`);

    const booking = await response.json();

    return booking;
}

export const getBookingByEmployeeIdAndDate = async (eId, dateString) => {
    const response = await fetch(`/api/bookings/${eId}/date?date=${dateString}`);

    const booking = await response.json();

    return booking;
}

export const createBooking = async (newBooking) => {
    const response = await fetch(`/api/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBooking),
    });

    const booking = await response.json();

    return booking;
}