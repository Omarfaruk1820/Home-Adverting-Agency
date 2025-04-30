import techContest from "../../assets/img/photo5.jpeg";
import cam from "../../assets/img/cam.avif";
import watch from "../../assets/img/watch2.avif";
import watchTv from "../../assets/img/tv2.avif";
const FeatureSetion = () => {
  return (
   <div className='bg-gray-100 mt-10'>
     <div className="grid grid-cols-2  gap-5 ">
      <div className="  w-full ">
        <div className="ml-20 ">
          <div className="space-y-4">
            <p className=" font-medium text-blue-400">Featured Works</p>
            <h1 className="text-4xl font-bold">Some of our Cases</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              odio dolores nesciunt nulla obcaecati. Praesentium sunt corrupti
              vitae accusamus necessitatibus.
            </p>
          </div>
          <div className="mt-10">
            <img className="w-[500px] h-[240px]" src={techContest} alt="" />
            <p className="text-xl font-medium">TechZ World Con #4</p>
            <p className="font-medium text-cyan-500">Creative</p>
          </div>
          <div className="mt-20">
            <img className="w-[500px] h-[240px]" src={cam} alt="" />
            <p className="text-xl font-medium">TechZ World Con #4</p>
            <p className="font-medium text-emerald-500">Social Media</p>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="ml-10 mt-28">
          <div className="space-y-2">
            <img className="w-[400px] h-[200px]" src={watch} alt="" />
            <p>Detick watch product launching</p>
            <p className="font-medium text-emerald-500">Digital</p>
          </div>
          <img className="w-[400px] h-[200px] mt-20" src={watchTv} alt="" />
          <p>Kripeek Tv commercial</p>
          <p className="font-medium text-emerald-500">Traditional</p>
          
        </div>
        <div className="justify-center">
            <p className='items-'><button className="btn">VIEW ALL WORKS</button></p>
          </div>
      </div>
    </div>
   </div>
  );
};

export default FeatureSetion;
