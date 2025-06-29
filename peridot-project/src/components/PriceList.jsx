

function PriceList({title, services}){

    const removeSpace = (s) => {
        return s.replace(/\s+/g, '');
    }

    return(
        <section id={removeSpace(title)} className = "price-section">
            <div className={"category-price"}>{title}</div>
            <ul className="service-list">
                {services.map(({name, price}, index) => (
                    <li className="service-item" key={index}>
                        <span className="service-name">{name}</span>
                        <span className="dots"></span>
                        <span className="service-price">{price}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default PriceList;