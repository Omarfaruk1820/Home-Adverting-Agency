import NavBanner from "./Navbar/NavBanner";
import AdvertingSection from "./Pages/AdvertingSection";
import CaseStudySection from "./Pages/CaseStudySection";
import ThereSection from "./Pages/thereSection";


const Home = () => {
  return (
    <div className='min-h-auto'>
     <NavBanner></NavBanner>
     <ThereSection></ThereSection>
     <AdvertingSection></AdvertingSection>
     <CaseStudySection></CaseStudySection>
    </div>
  );
};

export default Home;
