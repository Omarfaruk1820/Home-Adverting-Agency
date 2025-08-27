import { FaLongArrowAltDown } from "react-icons/fa";

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
        <button className="btn btn-secondary p-2 mt-5">
          {" "}
          LEARN MORE
          
          <FaLongArrowAltDown></FaLongArrowAltDown>
        </button>
      </div>
    </section>
  );
};

export default Banner;
