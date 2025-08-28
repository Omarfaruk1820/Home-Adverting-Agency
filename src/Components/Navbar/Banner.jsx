import { FaLongArrowAltDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div>
        <h1 className="md:text-[70px] font-bold">
          A Leading Adverting<br></br> Agency in san fransisco{" "}
        </h1>
        <p>congure consecteture sapien pellentesqure altrices tempus nunc.</p>
    <NavLink to="/service">
            <button className="btn cosmic-button p-2 mt-5">
          {" "}
          LEARN MORE
          
          <FaLongArrowAltDown></FaLongArrowAltDown>
        </button>
    </NavLink>
      </div>
    </section>
  );
};

export default Banner;
