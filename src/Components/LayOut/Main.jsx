import { Outlet } from "react-router-dom";
import Navber from "../Navbar/Navber";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div className=''>
            <Navber></Navber>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;