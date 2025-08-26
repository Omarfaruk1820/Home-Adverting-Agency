import comma from "../../assets/img/comma2.avif"
import comma2 from "../../assets/img/comma.jpg"

const Blog = () => {
    return (
        <div className='bg-gray-100'>
       <div className='mx-20'>
       <div>
        <img className='w-20 h-20' src={comma} alt="" /> 
            </div> 
            <p className='text-3xl font-medium mx-20'> For the first time Lorem ipsum dolor ea omnis voluptatum, sit <br></br> adipisicing elit. Recusandae 
                 aperiam magni adipisci saepe animi placeat<br></br> error soluta autem tempora optio,aspernatur aut ratione nulla.
                 quo quos   Inventore!</p> 
                 <div  className='relative  '>
                    <img className='w-20 h-20 absolute right-0   ' src={comma2} alt="" />
                 </div>
       </div>
        </div>
    );
};

export default Blog;