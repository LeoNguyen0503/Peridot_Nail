import React, { useState, useEffect } from "react";

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
                            <img src={image} alt={`Image ${index + 1}`} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ImageCarousel;