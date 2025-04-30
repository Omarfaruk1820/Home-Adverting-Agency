import skinecare from "../../assets/img/1.avif"
import { MdArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Syltiswoman from "../../assets/img/girl3.avif"

const CaseStudySection = () => {
    return (
      <div className='bg-gray-100'>
          <div className=' mt-10'>
          <h1 className='text-center text-xl font-bold'>Case Studies</h1> 
          <p className='text-center text-4xl font-bold'>Happy Clients Story</p> 
          <div className='grid gap-5 mt-10  grid-cols-2'>
            <div className='border-2 border-green-400 ml-20 mr-10' >
                <p className='text-xl font-medium text-blue-500'>01.</p>
                <p className='text-2xl font-bold mt-2 mb-2'>Culeet Skincare</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus 
                    eaque perspiciatis tempore, eum facere hic
                     numquam iure consequatur doloremque facilis.</p>
                     <div className='flex'>
                        <p className='mt-1'><MdArrowRight /></p>
                        <p> Consect eum iure minus odit sequi,</p>
                     </div>
                     <div className='flex'>
                        <p className='mt-1'><MdArrowRight /></p>
                        <p> dolor sit. perferendis iusto tempore</p>
                     </div>
                     <div className='text-center mt-5'>
                        <button className='btn btn-secondary'>READ CASE STUDY <   MdKeyboardDoubleArrowRight /></button>
                     </div>
                     <div>
                        <img className='w-[400px] h-[300px]'  src={Syltiswoman} alt="" />
                     </div>
            </div>
            <div className='border-2 border-yellow-400'>
                <img className='w-[400px] h-[250px]' src={skinecare} alt="" />
                <div className='mt-10 '>
                    <p className='text-xl font-medium text-blue-500'>02.</p>
                    <p className='text-2xl font-bold mt-2 mb-2'>Lues Clothing</p>
                    <p className='mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora,
                         porro perspiciatis magni expedita similique quibusdam suscipit quod, dolore iure totam deleniti!
                         Nulla quas animi iste libero architecto ipsam fugiat?</p>

                         <div className='flex'>
                        <p className='mt-1'><MdArrowRight /></p>
                        <p> Consect eum iure minus odit sequi,</p>
                     </div>
                     <div className='flex'>
                        <p className='mt-1'><MdArrowRight /></p>
                        <p> dolor sit. perferendis iusto tempore</p>
                     </div>
                     <div className='text-center mt-5'>
                        <button className='btn btn-secondary'>READ CASE STUDY <   MdKeyboardDoubleArrowRight /></button>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CaseStudySection;