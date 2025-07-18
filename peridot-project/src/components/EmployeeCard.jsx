
import {Link} from "react-router-dom";

function EmployeeCard(props){

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

    const avail = shortDayOfWeek(dateArray(props.employee.availability));
    const position = firstLetterUppercase(props.employee.position);


    return (
        <div className="employee-card">
            <img src={props.image} alt="avatar"/>
            <div className="info-container">
                <p className="name">{props.employee.name.toUpperCase()}</p>
                <p className="availability">Work: {avail}</p>
                <p className="position">{position}</p>
                <button>
                    <Link to="/booking-process"
                          state={{
                              name: props.employee.name.toUpperCase(),
                              availability: avail
                          }}>
                        Book me
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default EmployeeCard;