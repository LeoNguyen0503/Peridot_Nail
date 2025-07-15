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
       fetchEmployee();
    },[])

    const dateArray = (date) => {
        const res = [];
        for (let i = 0; i < date.length; i++){
            res.push(date[i].day);
        }

        return res;
    }


    const shortDayOfWeek = (days) =>{
        const dayMap = {
            "Monday": "Mon",
            "Tuesday": "Tue",
            "Wednesday": "Wed",
            "Thursday": "Thu",
            "Friday": "Fri",
            "Saturday": "Sat",
            "Sunday": "Sun"
        }

        let dayString = "";

        for (let i = 0; i < days.length; i++){
            dayString += dayMap[days[i]];
            if (i < days.length -1){
                dayString += ", ";
            }
        }

        return dayString;
    }

    const firstLetterUppercase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="booking-container">
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        <EmployeeCard image={pic1} name={employee.name.toUpperCase()}
                                      availability={shortDayOfWeek(dateArray(employee.availability))}
                                      position={firstLetterUppercase(employee.position)}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Booking