import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import logonew from "../../assets/img/omar.png"

const navItems = [
  { name: "Work ", href: "#home" },
  { name: "Service", href: "#Service" },
  { name: " Casestudies", href: "#Casestudies" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Login", href: "#login" },
];
const Navbar1 = () => {

    const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
    return (
         <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
           <img className="w-14 h-14" src={logonew} alt="" /> 
          {/* <span className="relative z-10">
            <span className="text-glow text-foreground">Omar Faruk</span>{" "}
            Portfolio
          </span> */}
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center mr-10 space-x-8">
          {navItems.map((item, idx) => (
            <a
              key={item.name + idx} // unique key
              href={item.href} 
              className="text-sm text-foreground/80 transition-colors duration-300 font-medium hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
 {/* talk to with me */}
         <div className=" ">
          <div className='md:flex hidden sm:inline-block '>
          <p className='mt-2'>Let's Talk</p>
          <a className="btn btn-dash btn-secondary md:none">01400188860</a>
          </div>
        </div>

        {/* mobile view */}
        <button onClick={()=> setIsMenuOpen((prev)=>!prev)} className='mr-6 md:hidden p-2 text-foreground  z-50' aria-label={isMenuOpen?"Close Menu":"Open Menu"}>{isMenuOpen? <X size={24}></X>: <Menu size={24}></Menu> }</button>
         <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen?"opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"
         )}>
            <div className="flex flex-col text-xl space-y-8">
          {navItems.map((item, idx) => (
            <a
              key={item.name + idx} // unique key
              href={item.href} 
              className="text-sm text-foreground/80 transition-colors
               duration-300 font-medium hover:text-primary"
               onClick={()=>setIsMenuOpen(false)}
               >
              {item.name}
            </a>
          ))}
        </div>
         </div>
      </div>
    </nav>
    );
};

export default Navbar1;