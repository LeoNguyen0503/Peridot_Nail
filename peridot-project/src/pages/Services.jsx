import { useEffect } from "react";
import PriceList from '../components/PriceList.jsx'

function Services(){

    useEffect(() => {
            document.title = "Peridot Nails - Services";  
    },[])

     const manicure = [
        { name: "Regular Manicure", price: "$30" },
        { name: "Shellac (gel) Manicure", price: "$35" },
        { name: "Polish Colour Change", price: "$20" },
        { name: "Shellac Colour Change", price: "$25" }
    ];

    const pedicure = [
        {name: "Regular Pedicure", price: "$50"},
        {name: "Shellac Pedicure", price: "$55"},
        {name: "Polish Colour Change", price: "$25"},
        {name: "Shellac Colour Change", price: "$30"}
    ]

    const combo = [
        {name: "Manicure & Pedicure Regular", price: "$75"},
        {name: "Manicure & Pedicure Shellac", price: "$85"},
        {name: "Shellac Manicure & Pedicure Regular", price: "$80"}
    ]

    const nailsEnhancement = [
        {name: "Full Set Bio Gel", price: "$65"},
        {name: "Refill Bio Gel", price: "$55"},
        {name: "Full Set Acrylic", price: "$55"},
        {name: "Refill Acrylic", price: "$45"},
    ]

    const addOn = [
        {name: "French Tip", price: "$10+"},
        {name: "Ombre", price: "$15"},
        {name: "Chrome", price: "$15"},
        {name: "Shellac Removal", price: "$15"},
        {name: "Acrylic Removal", price: "$25"},
        {name: "Repair", price: "$5+"},
        {name: "Design", price: "$5+"},
    ]

    const kid = [
        {name: "Regular Manicure", price: "$20 | Gel: $30"},
        {name: "Regular Pedicure", price: "$30 | Gel: $40"},
        {name: "Regular Combo", price: "$55 | Gel: $70"},
        {name: "Polish Change on Toes", price: "$15"},
        {name: "Shellac Change on Hand", price: "$20"},
        {name: "Shellac Change on Toes", price: "$20"},
    ]

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <PriceList title="Manicure" services={manicure}/>
            <PriceList title="Pedicure" services={pedicure}/>
            <PriceList title="Combo" services={combo}/>
            <PriceList title="Nails Enhancement" services={nailsEnhancement}/>
            <PriceList title="Add On Services" services={addOn}/>
            <PriceList title="Kids 11 and Under" services={kid}/>
        </div>
    )
}

export default Services