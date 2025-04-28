import { FaLongArrowAltRight } from "react-icons/fa";

const NavBanner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='ml-[140px] mt-10'>
            <h1 className='md:text-[70px] font-bold'>A Leading Adverting<br></br> Agency in san fransisco </h1>
            <p>congure consecteture sapien pellentesqure altrices tempus nunc.</p>
            <button className='btn btn-secondary p-2 mt-5'> LEARN MORE 
            <FaLongArrowAltRight />
            </button>
        </div>
        </div>
    );
};

export default NavBanner;