import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar1 from "../Navbar/Navbar1";


const Main = () => {
    return (
        <div className=''>
          
            <Navbar1></Navbar1>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;