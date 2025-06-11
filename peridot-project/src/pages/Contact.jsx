import { useEffect } from "react"

function Contact(){

    useEffect(() => {
        document.title = "Peridot Nails - Contact Us";  
    },[])

    return (
        <div className="contact-container">
            {/* <img src="https://via.placeholder.com/300x200?text=Placeholder" alt="Placeholder" /> */}
            <h1>This is contact us page</h1>
        </div>
    )
}

export default Contact