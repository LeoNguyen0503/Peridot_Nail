import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ImageCarousel({ images }){
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    const getPosition = (index, currentIndex, length) => {

        const offset = (index - currentIndex + length) % length;

        switch (offset) {
            case 0:
                return "center"
            case 1:
                return "right"
            case 2:
                return "left"
            default:
                return "hidden"
        }

    }

    return (
        <div className="image-holder">
            <ul>
                {images.map((image, index) => {
                    const position = getPosition(index, currentIndex, images.length);
                    return (
                        <li key={index} className={position}>
                            <Link to="/gallery">
                                <img src={image} alt={`Image ${index + 1}`} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ImageCarousel;