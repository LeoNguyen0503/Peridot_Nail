// import pic1 from "../assets/nails/@pelikh_ nails ideas.jpg";
// import pic2 from "../assets/nails/1e4563fa-7156-4f44-bde3-d60bce4436cd.jpg";
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
import pic15 from "../assets/nails/515286076_1072422524336133_7028703554641116684_n.jpg";
import pic16 from "../assets/nails/515586806_1309303820620025_4456640108998490378_n.jpg";
import pic17 from "../assets/nails/515651180_596614366539380_4155715137222637695_n.jpg";
import pic18 from "../assets/nails/516033692_710950375163703_7290270173496409641_n.jpg";
import pic19 from "../assets/nails/515673530_1697417977554417_7542061812837289286_n.jpg";
import pic20 from "../assets/nails/516838695_1402114507743570_3829750828356869125_n.jpg";
import pic21 from "../assets/nails/518301529_648995264863328_1352076501818162361_n.jpg";
import pic22 from "../assets/nails/518780136_1488402672157353_2001335903713197377_n.jpg";
import pic23 from "../assets/nails/517165835_1208312434377958_4944608248562395113_n.jpg";
import pic24 from "../assets/nails/517936693_1389568115675695_6857352705715375948_n.jpg";
import pic25 from "../assets/nails/517582970_1952616692164872_4551077578678294188_n.jpg";
import pic26 from "../assets/nails/517919618_1470575407452726_7860899055209606979_n.jpg";
import pic27 from "../assets/nails/517960415_752742903870263_7221269678086592430_n.jpg";
import pic28 from "../assets/nails/518238119_1268706201546868_5784495729424290577_n.jpg";
import pic29 from "../assets/nails/518456519_1727508184537563_2371732598624825696_n.jpg";
import pic30 from "../assets/nails/518769221_1802957397244877_548898231637375682_n.jpg";
import pic31 from "../assets/nails/519389489_1279398846916637_950722391290912212_n.jpg";
import pic32 from "../assets/nails/520239547_764137626122933_3498810652697986068_n.jpg";
import pic33 from "../assets/nails/520240915_1437476170631874_5049353644418210743_n.jpg";
import pic34 from "../assets/nails/520452786_1222339862970920_3322980548344095161_n.jpg";
import pic35 from "../assets/nails/520629053_1945806369488656_4420872865494926631_n.jpg";
import pic36 from "../assets/nails/520629053_3290318081118173_8665557733899724220_n.jpg";
import pic37 from "../assets/nails/520979196_1274423897613686_370259972468907062_n.jpg";
import pic38 from "../assets/nails/521399185_1032686342036667_3271426283377329691_n.jpg";
import pic39 from "../assets/nails/524766835_1483853369453010_8953941955274400799_n.jpg";
import pic40 from "../assets/nails/525422074_1279851277127973_4988337289618327291_n.jpg";
import pic41 from "../assets/nails/527025403_1270871058158911_5593688862286362426_n.jpg";
import pic42 from "../assets/nails/527236383_1052720107039147_3379923155353940951_n.jpg";
import pic43 from "../assets/nails/528241227_759867136443409_8364611029637745819_n.jpg";
import pic44 from "../assets/nails/528388727_1383938859343124_4145858178164931015_n.jpg";
import pic45 from "../assets/nails/528911269_1332722351617046_5482566640594889650_n.jpg";
import pic46 from "../assets/nails/531603990_1232353902024265_1671481808405792451_n.jpg";
import pic47 from "../assets/nails/532029215_771921195473879_2582195211428696068_n.jpg";
import pic48 from "../assets/nails/532424686_2657906224405444_4657234000027012271_n.jpg";
import pic49 from "../assets/nails/532545588_786102037430781_207231682358363229_n.jpg";
import pic50 from "../assets/nails/533541344_1446121486592833_5313050720306192128_n.jpg";


import {useState} from "react";
import { FiX } from "react-icons/fi";


function Images(){

    const [isFull, setIsFull] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [pic3, pic4, pic5, pic6, pic7, pic8, pic9,
        pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18,
        pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27,
    pic28, pic29, pic30, pic31, pic32, pic33, pic34, pic35, pic36, pic37, pic38,
    pic39, pic40, pic41, pic42, pic43, pic44, pic45, pic46, pic47, pic48, pic49, pic50];


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