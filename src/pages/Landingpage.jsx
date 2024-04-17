import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import Models from "../components/Models";
import Nav from "../components/Nav";


function Landingpage() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <Models /> */}
      <Features />
      <Footer/>
    </>
  );
}

export default Landingpage;
