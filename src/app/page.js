import { Navbar } from "@/components";
import "./page.scss";
import { Footer, Header, Skills, Testimonial, Work } from "@/container";
import About from "@/container/About/About";
import Floating from "@/components/Floating";
const page = () => {
  return (
    <div className="app">
      <Navbar />
      <Floating />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header />
      </div>
      {/* <About /> */}
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default page;
