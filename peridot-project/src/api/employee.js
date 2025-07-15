
export const getEmployees = async () => {
    const response = await fetch("/api/employees");

    const employee = await response.json();

    return employee;
}