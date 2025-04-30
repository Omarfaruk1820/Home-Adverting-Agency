import NavBanner from "./Navbar/NavBanner";
import AdvertingSection from "./Pages/AdvertingSection";
import CaseStudySection from "./Pages/CaseStudySection";
import Clients from "./Pages/Clients";
import FeatureSetion from "./Pages/FeatureSetion";
import ThereSection from "./Pages/thereSection";


const Home = () => {
  return (
    <div className='min-h-auto'>
     <NavBanner></NavBanner>
     <ThereSection></ThereSection>
     <AdvertingSection></AdvertingSection>
     <FeatureSetion></FeatureSetion>
     <CaseStudySection></CaseStudySection>
     <Clients></Clients>
    </div>
  );
};

export default Home;
