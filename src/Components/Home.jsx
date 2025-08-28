
import Banner from "./Navbar/Banner";
import AdvertingSection from "./Pages/AdvertingSection";
import Blog from "./Pages/Blog";
import CaseStudySection from "./Pages/CaseStudySection";
import Clients from "./Pages/Clients";
import FeatureSetion from "./Pages/FeatureSetion";
import ThereSection from "./Pages/thereSection";


const Home = () => {
  return (
    <div className='min-h-auto'>
 
     <Banner></Banner>
     <ThereSection></ThereSection>
     <AdvertingSection></AdvertingSection>
     <FeatureSetion></FeatureSetion>
     <Blog></Blog>
     <CaseStudySection></CaseStudySection>
     <Clients></Clients>
    </div>
  );
};

export default Home;
