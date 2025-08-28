import { FaPaintBrush } from "react-icons/fa";
import { FaTachographDigital } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
const AdvertingSection = () => {
    return (
     <section id="hero"
      className="relative max-h-screen flex flex-col md:flex-cols-2 items-center justify-center px-4">
       <div className='bg-white  '>
          <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3  gap-2'>
           <div className='col-span-1 p-10 justify-center items-center h-auto w-full border-2  '>
            <h1 className="text-2xl font-bold ml-24">WHAT WE DO</h1>
           </div>
           <div className='col-span-2 border-2 '>
         <div className='space-y-3 justify-center items-center'>
        <h2 className=" mb-6 font-semibold text-lg   md-12 text-center">
          Adverting <span className="font-semibold text-lg ">Sulations</span>
        </h2>
          <p>Lorem ipsum dolor sit, amet consectetur elit. Ut natus   iure iste<br></br>
             suscipit 
            quae totam quas soluta vel quis saepe.</p>
         </div>
            <div className='flex items-center justify-center gap-2'>
                <div className='w-full lg:flex-cols-2 md:flex-cols-2 flex-cols-1 justify-center items-center  '>
                  <div className='space-y-3 mt-3 group bg-card rounded-lg overflow-hidden shadow-xs card-hover text-wrap'>
                  <p className=' text-blue-400 text-3xl ml-48 '><FaPaintBrush /></p>
                <h1 className='font-semibold text-lg '>Creative Advertising</h1>
                <p className="text-wrap text-muted-foreground  m-4 space-y-2">Lorem ipsum dolor  amet consectetur adipisicing <br></br> adipisicing elit.reiciendis consectetur sit Aspernatur<br></br>  hic saepe.
                     Suscipit ipsa dolore facere 
                   </p>
                  </div>
                 <div className='space-y-3 mt-10 group bg-card rounded-lg overflow-hidden shadow-xs card-hover text-wrap'>
                 <p className=' text-blue-400 text-3xl'><FaDesktop /></p>
                <h1 className='font-semibold text-lg '>Tradition</h1>
                <p className="text-wrap text-muted-foreground  m-4 space-y-2">Lorem ipsum dolor  amet consectetur adipisicing <br></br> adipisicing elit.reiciendis consectetur sit Aspernatur<br></br>  hic saepe.
                     Suscipit ipsa dolore facere 
                   </p>
                 </div>
                 
                </div>
                <div className='w-full md:flex-cols-2 justify-center items-center flex-col-1'>
                   
                   <div className='space-y-2 mt-3'>
                   <p className=' text-blue-400 text-3xl'><FaTachographDigital /></p>
                    <p className='font-semibold text-lg '>Digital Advertring</p>
                    <p className="text-wrap text-muted-foreground  m-4 space-y-2">Lorem ipsum dolor  amet consectetur adipisicing <br></br> adipisicing elit.reiciendis consectetur sit Aspernatur<br></br>  hic saepe.
                     Suscipit ipsa dolore facere 
                   </p>
                   </div>
                    
                    <div className='space-y-2 mt-10'>
                        <p className=' text-blue-400 text-3xl'><IoShareSocialSharp /></p>
                    <p className='font-semibold text-lg '>Digital Advertring</p>
                    <p className="text-wrap text-muted-foreground  m-4 space-y-2">Lorem ipsum dolor  amet consectetur adipisicing <br></br> adipisicing elit.reiciendis consectetur sit Aspernatur<br></br>  hic saepe.
                     Suscipit ipsa dolore facere 
                   </p>
                    </div>
                 
                </div>
            </div>
            </div>
        </div>
      </div>
     </section>
    );
};

export default AdvertingSection;