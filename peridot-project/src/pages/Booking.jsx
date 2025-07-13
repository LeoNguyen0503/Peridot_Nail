import {useEffect, useState} from "react";
import EmployeeCard from "../components/EmployeeCard.jsx";
import pic1 from '../assets/logo.png';







function Booking(){

    const [employees, setEmployees] = useState([])


    const getEmployees = async () => {
        const response = await fetch("/api/employees");

        const employee = await response.json();
        setEmployees(employee.data)
    }


    useEffect(() => {
       document.title = "Peridot Nails - Booking";
        getEmployees();
    },[])

    console.log(employees);


    return (
        <div className="booking-container">
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        <EmployeeCard image={pic1} name={employee.name} availability={employee.availability} position={employee.position}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Booking