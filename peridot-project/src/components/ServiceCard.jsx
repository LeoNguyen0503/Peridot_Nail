

function ServiceCard(props){
    return(
        <div className="service-card">
            <img src={props.image} alt=" "/>
            <p>{props.name}</p>
        </div>

    );
}

export default ServiceCard;