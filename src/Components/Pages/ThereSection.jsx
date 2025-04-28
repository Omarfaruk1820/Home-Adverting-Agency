
import { FaLongArrowAltRight } from "react-icons/fa";
const ThereSection = () => {
    return (
        <div className='md:flex bg-gray-100'>
            <div className='md:w-full'>
                <p className='ml-24 mt-20 text-xl font-medium text-blue-600'>Hi there</p>
               <h1 className='ml-24 mt-10 text-4xl font-bold'> We are abstract<br></br>Expression</h1>
            </div>
            <div className='md:w-full h-[400px] justify-center'>
                <p className= 'mt-10 md:mt-32 mx-20 '>
                The riverine country of Bangladesh (“Land of the Bengals”) is one of the most
                 densely populated countries in the world, and its people are predominantly
                  Muslim.<br></br> As the eastern portion of the historical region of Bengal, 
                  the area once formed, along with what is now the Indian state of West
                   Bengal, the province of Bengal in British India. With the partition 
                   </p>
                    <button className='btn btn-secondary ml-20 p-2 mt-5'> READ MORE 
                               <FaLongArrowAltRight />
                               </button>
            </div>
        </div>
    );
};

export default ThereSection;