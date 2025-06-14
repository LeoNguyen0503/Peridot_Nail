import { useEffect} from "react";

function About(){

    useEffect(() => {
        document.title = "Peridot Nails - About Us";  
    },[])

    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-paragraph-container">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto atque debitis ea enim est impedit itaque mollitia nesciunt nostrum obcaecati officia perspiciatis possimus praesentium quidem, similique suscipit temporibus tenetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, architecto asperiores autem blanditiis consequatur corporis doloremque eius esse ipsa iure iusto laudantium minus nulla pariatur ratione reprehenderit sequi sint voluptas?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque dolores eaque harum mollitia nulla sint soluta totam ullam voluptatum. Cum dicta eius facilis hic ipsum quae ratione vero voluptatum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, asperiores autem blanditiis consequatur corporis doloremque eius esse ipsa iure iusto laudantium minus nulla pariatur ratione reprehenderit sequi sint voluptas?</p>
            </div>
        </div>
    )
}

export default About