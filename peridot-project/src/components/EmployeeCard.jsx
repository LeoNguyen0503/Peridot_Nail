



function EmployeeCard(props){

    return (
        <div className="employee-card">
            <img src={props.image} alt="avatar"/>
            <div className="info-container">
                <p className="name">{props.name}</p>
                <p className="availability">Work: {props.availability}</p>
                <p className="position">{props.position}</p>
                <button>Book me</button>
            </div>
        </div>
    );
}

export default EmployeeCard;