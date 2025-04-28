import { NavLink } from "react-router-dom";
import officeLogo from "../../assets/img/omar.png"

const Navber = () => {
    const links=<>
  <li><NavLink>WORK </NavLink></li>
  <li> <NavLink>SERVICE </NavLink></li>
  <li> <NavLink>CASESTUDIES </NavLink></li>
  <li> <NavLink>ABOUT </NavLink></li>
  <li> <NavLink>CONTACT </NavLink></li>
  <li> <NavLink>Login </NavLink></li>
   
    
    </>
    return (
     <div className='md:mx-10'>
           <div className="navbar bg-base-100  ">
        <div className="navbar-start">
          <div className="dropdown">
           
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 md:mt-3 w-52 md:p-2 shadow">
              
              {links}
            </ul>
          </div>
         <img className='w-8 h-8 md:ml-10' src={officeLogo} alt="" />
        </div>
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className='md:flex hidden sm:inline-block '>
          <p className='mt-2'>Let's Talk</p>
          <a className="btn btn-dash btn-secondary md:none">0140018886011111</a>
          </div>
        </div>
      </div>
     </div>
    );
};

export default Navber;