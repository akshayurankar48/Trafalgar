import AppImage from "./components/AppImage";
import Apps from "./components/Apps";
import BodyIllustration from "./components/BodyIllustration";
import Cards from "./components/Cards";
import Chevrons from "./components/Chevrons";
import Header from "./components/Header";
import HeadImage from "./components/HeadImage";
import HeadInfo from "./components/HeadInfo";
import HealthProviders from "./components/HealthProviders";
import OurServices from "./components/OurServices";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app overflow-hidden">
      <Header />
      <div className="flex flex-row-reverse justify-evenly">
        <HeadImage />
        <HeadInfo />
      </div>
      <div>
        <OurServices />
        <Cards />
      </div>

      <div className="flex">
        <BodyIllustration />
        <HealthProviders />
      </div>
      <div className="flex flex-row-reverse">
        <AppImage />
        <Apps />
      </div>
      <Testimonials />
      <Chevrons />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
