import { useEffect } from "react";

function Gallery(){

    useEffect(() => {
            document.title = "Peridot Nails - Gallery";  
    },[])

    return (
        <div className="gallery-container">
            {/* <img src="https://via.placeholder.com/300x200?text=Placeholder" alt="Placeholder" /> */}
            <h1>This is gallery page</h1>
        </div>
    )
}

export default Gallery