import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Loading from "./components/Loading/Loading";

const Contact = lazy(() => import("./pages/Contact/Contact/Contact"));
const Features = lazy(() => import("./pages/Home/Features/Features"));
const Hero = lazy(() => import("./pages/Home/Hero/Hero"));
const PricingPlans = lazy(
  () => import("./pages/Home/PricingPlans/PricingPlans")
);
const Testimonials = lazy(
  () => import("./pages/Home/Testimonials/Testimonials")
);
const WhatWeDo = lazy(() => import("./pages/Home/WhatWeDo/WhatWeDo"));
const WhoWeAre = lazy(() => import("./pages/Home/WhoWeAre/WhoWeAre"));
const AboutUs = lazy(() => import("./pages/About/AboutUs/AboutUs"));
const OurServices = lazy(
  () => import("./pages/OurServices/OurServices/OurServices")
);
const Login = lazy(() => import("./pages/Login/Login/Login"));
const OurTeam = lazy(() => import("./pages/About/OurTeam/OurTeam"));
const FAQs = lazy(() => import("./pages/OurServices/FAQs/FAQs"));
const WhyChooseUs = lazy(
  () => import("./pages/Contact/WhyChooseUs/WhyChooseUs")
);
const TalkBanner = lazy(() => import("./pages/Home/TalkBanner/TalkBanner"));

const Home = () => (
  <Suspense fallback={<Loading />}>
    <Hero />
    <Features />
    <WhoWeAre />
    <WhatWeDo />
    <PricingPlans />
    <Testimonials />
    <TalkBanner />
  </Suspense>
);

const About = () => (
  <Suspense fallback={<Loading />}>
    <AboutUs />
    <OurTeam />
  </Suspense>
);

const Services = () => (
  <Suspense fallback={<Loading />}>
    <OurServices />
    <FAQs />
  </Suspense>
);

const ContactPage = () => (
  <Suspense fallback={<Loading />}>
    <WhyChooseUs />
    <Contact />
  </Suspense>
);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
