
import {Link} from "react-router-dom";

function EmployeeCard(props){




    return (
        <div className="employee-card">
            <img src={props.image} alt="avatar"/>
            <div className="info-container">
                <p className="name">{props.name}</p>
                <p className="availability">Work: {props.availability}</p>
                <p className="position">{props.position}</p>
                <button>
                    <Link to="/booking-process"
                          state={{name: props.name,
                              availability: props.availability}}>
                        Book me
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default EmployeeCard;