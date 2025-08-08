const API_URL = import.meta.env.VITE_API_URL;

export const getEmployees = async () => {
    const response = await fetch(`${API_URL}/api/employees`);

    const employee = await response.json();

    return employee;
}

export const getEmployeeById = async (id) => {
    const response = await fetch(`${API_URL}/api/employees/${id}`);

    const employee = await response.json();

    return employee;
}

