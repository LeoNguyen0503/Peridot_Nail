const API_URL = import.meta.env.VITE_API_URL;

export const verifyAdmin = async (login) => {
    const response = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
    });

    const admin = await response.json();

    return admin;

}