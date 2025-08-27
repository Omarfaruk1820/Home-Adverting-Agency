import { Outlet } from "react-router-dom";
// import Navber from "../Navbar/Navber";
import Footer from "../Footer/Footer";
import Navbar1 from "../Navbar/Navbar1";


const Main = () => {
    return (
        <div className=''>
            {/* <Navber></Navber> */}
            <Navbar1></Navbar1>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;