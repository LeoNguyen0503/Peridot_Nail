import { useEffect } from "react";
import ImageGallery from "../components/Images";

function Gallery(){

    useEffect(() => {
            document.title = "Peridot Nails - Gallery";  
    },[])

    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <ImageGallery />
        </div>
    )
}

export default Gallery