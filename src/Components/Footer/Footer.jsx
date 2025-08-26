import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/img/omar.png"

const Footer = () => {
    return (
        <div className=''>
         <footer className="footer sm:footer-horizontal bg-neutral justify-evenly text-white grid-rows-1 p-10">
         <nav className='text-white   '>
          <h6 className="footer-title text-white footer-vertical">Social</h6>
          <a className="link link-hover"><FaTwitter /></a>
          <a className="link link-hover"> <FaInstagram /></a>
          <a className="link link-hover"><FaFacebookSquare /></a>
          <a className="link link-hover"><FaGithub /></a>
         
        </nav>
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover">Creative</a>
          <a className="link link-hover">Digital</a>
          <a className="link link-hover">Social Media</a>
          <a className="link link-hover">Traditional</a>
          <a className="link link-hover">Custom</a>
         
        </nav>
        <nav>
          <h6 className="footer-title text-white">Agency</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Awards</a>
          <a className="link link-hover">News and Blog</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Keep in Touch</h6>
          <a className="link link-hover">15/1 R. A. Khan Chowdhury Road</a>
          <a className="link link-hover">Kushtia Sadar, Kushtia,</a>
          <a className="link link-hover">Khulna 7000, BD</a>
          <a className="link link-hover">+8801400188865</a>
          <a className="link link-hover">Dizro@gmail.com</a>
        </nav>
       
       
      </footer>
      <div className= 'underline border border-amber-100'></div>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
  <img className='w-8 h-8' src={logo} alt="" />
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
      {/* <footer className="footer sm:footer-horizontal text-align-center bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
   
    <img className='w-10 h-10' src={logo} alt="" />
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  
</footer> */}
       </div>
    );
};

export default Footer;