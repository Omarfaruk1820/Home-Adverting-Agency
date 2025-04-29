import { FaPaintBrush } from "react-icons/fa";
import { FaTachographDigital } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
const AdvertingSection = () => {
    return (
      <div className='bg-gray-100'>
          <div className='grid grid-cols-3 gap-2'>
           <div className='col-span-1 mt-20 border-2 border-red-500 text-center'>What we do</div>
           <div className='col-span-2 border-green-300 border-2'>
         <div className='space-y-2'>
         <h1 className='mt-20 font-semibold text-5xl'>Adverting Sulations</h1>
          <p>Lorem ipsum dolor sit, amet consectetur elit. Ut natus   iure iste<br></br>
             suscipit 
            quae totam quas soluta vel quis saepe.</p>
         </div>
            <div className='grid grid-cols-2'>
                <div className='border-yellow-300 border w-full'>
                  <div className='space-y-2 mt-3'>
                  <p className=' text-blue-400 text-3xl'><FaPaintBrush /></p>
                <h1 className='text-2xl font-bold'>Creative Advertising</h1>
                <p>Lorem ipsum dolor  amet consectetur adipisicing <br></br> adipisicing elit.reiciendis consectetur sit Aspernatur<br></br>  hic saepe.
                     Suscipit ipsa dolore facere 
                   </p>
                  </div>
                 <div className='space-y-2 mt-10'>
                 <p className=' text-blue-400 text-3xl'><FaDesktop /></p>
                <h1 className='text-2xl font-bold'>Tradition</h1>
                <p>Lorem ipsum dolor  amet consectetur adipisicing <br></br> adipisicing elit.reiciendis consectetur sit Aspernatur<br></br>  hic saepe.
                     Suscipit ipsa dolore facere 
                   </p>
                 </div>
                 
                </div>
                <div className='border border-gray-200 w-full'>
                   
                   <div className='space-y-2 mt-3'>
                   <p className=' text-blue-400 text-3xl'><FaTachographDigital /></p>
                    <p className='text-2xl font-bold'>Digital Advertring</p>
                    <p>Lorem ipsum dolor  amet consectetur adipisicing <br></br> adipisicing elit.reiciendis consectetur sit Aspernatur<br></br>  hic saepe.
                     Suscipit ipsa dolore facere 
                   </p>
                   </div>
                    
                    <div className='space-y-2 mt-10'>
                        <p className=' text-blue-400 text-3xl'><IoShareSocialSharp /></p>
                    <p className='text-2xl font-bold'>Digital Advertring</p>
                    <p>Lorem ipsum dolor  amet consectetur adipisicing <br></br> adipisicing elit.reiciendis consectetur sit Aspernatur<br></br>  hic saepe.
                     Suscipit ipsa dolore facere 
                   </p>
                    </div>
                 
                </div>
            </div>
            </div>
        </div>
      </div>
    );
};

export default AdvertingSection;