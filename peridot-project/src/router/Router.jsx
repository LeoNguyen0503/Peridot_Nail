import {createBrowserRouter} from "react-router-dom";
import App from "../App"; 
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Booking from "../pages/Booking";
import BookingProcess from "../pages/BookingProcess";
import Admin from "../pages/Admin.jsx";
import Auth from "../pages/Auth.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index:true, element: <Home/>},
      {path: "about", element: <About/>},
      {path: "services", element: <Services/>},
      {path: "gallery", element: <Gallery/>},
      {path: "booking", element: <Booking/>},
      {path: "booking-process", element: <BookingProcess/>},
      {path: "admin", element: <Admin/>},
      {path: "auth", element: <Auth/>}
    ],
  },
])

export default Router;