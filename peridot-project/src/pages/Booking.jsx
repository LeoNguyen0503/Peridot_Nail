import {useEffect, useState} from "react";
import EmployeeCard from "../components/EmployeeCard.jsx";
import pic1 from '../assets/logo.png';
import { getEmployees } from "../api/employee.js";

function Booking(){

    const [employees, setEmployees] = useState([])


    const fetchEmployee = async () => {

        try {
            const employee = await getEmployees();

            if (employee.success) {
                setEmployees(employee.data);
            } else {
                console.log("error: " + employee.message);
            }
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
       document.title = "Peridot Nails - Booking";
       fetchEmployee()
    },[])


    // if (employees.length > 0) {
    //     console.log(employees[0]._id);
    //     console.log(typeof employees[0]._id);
    // }



    return (
        <div className="booking-container">
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        <EmployeeCard image={pic1}
                                      employee={employee}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Booking