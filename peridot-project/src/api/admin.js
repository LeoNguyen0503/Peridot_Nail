export const verifyAdmin = async (login) => {
    const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
    });

    const admin = await response.json();

    return admin;

}