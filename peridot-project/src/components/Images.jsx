import pic1 from "../assets/nails/@pelikh_ nails ideas.jpg";
import pic2 from "../assets/nails/1e4563fa-7156-4f44-bde3-d60bce4436cd.jpg";
import pic3 from "../assets/nails/4d1b8f1f-02e3-4541-b054-4a355385e173.jpg";
import pic4 from "../assets/nails/6a7196f5-f0b8-4765-b657-a079e84d6459.jpg";
import pic5 from "../assets/nails/7ba2e0a3-7173-4ea4-8f13-7ca4b197ee2b.jpg";
import pic6 from "../assets/nails/62f9df6a-cba4-4b42-a652-d6b6cfab9804.jpg";
import pic7 from "../assets/nails/226af816-01d9-444a-ba11-a51c2b120aad.jpg";
import pic8 from "../assets/nails/614d77bc-f739-47e4-a905-092ec074af89.jpg";
import pic9 from "../assets/nails/524195cc-cdeb-4f93-9f79-a7eade0bb94c.jpg";
import pic10 from "../assets/nails/37245208-ae1d-42e4-bad6-6810e0324d01.jpg";
import pic11 from "../assets/nails/514291822_1769481323698392_8823121160383715461_n.jpg";
import pic12 from "../assets/nails/aadab154-6055-4cf1-a183-3d6bf011b30f.jpg";
import pic13 from "../assets/nails/ac9ca8db-611b-4af2-9d74-bfc70bccd656.jpg";
import pic14 from "../assets/nails/download.jpg";
import {useState} from "react";
import { FiX } from "react-icons/fi";


function Images(){

    const [isFull, setIsFull] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9,
        pic10, pic11, pic12, pic13, pic14];


    const handleClick = (image) => {
        setIsFull(!isFull);
        setSelectedImage(image);
    }

    const handleClose = () => {
        setIsFull(false);
        setSelectedImage(null); 
    }
    
    return (
        <div className="galleryImage-container">
            {isFull && selectedImage && (
                <div className="full-image-overlay" onClick={handleClose}>
                    <div className="full-image">
                        <img src={selectedImage} alt="full-view" />
                        <FiX className="close-icon" onClick={handleClose} size={32} />
                    </div>
                </div>
            )}
            <div className="image-carousel">
                <ul>
                   {images.map((image, index) => (
                        <li key={index}><img src={image} alt={`Nail Spa ${index + 1}`} onClick={() => handleClick(image)}/></li>
                   ))}
                </ul>
            </div>
        </div>
    )
}

export default Images;  