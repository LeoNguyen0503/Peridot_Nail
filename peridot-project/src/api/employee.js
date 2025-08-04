
export const getEmployees = async () => {
    const response = await fetch("/api/employees");

    const employee = await response.json();

    return employee;
}

export const getEmployeeById = async (id) => {
    const response = await fetch(`/api/employees/${id}`);

    const employee = await response.json();

    return employee;
}

