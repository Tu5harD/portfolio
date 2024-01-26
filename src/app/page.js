import { Navbar } from "@/components";
import "./page.scss";
import { Footer, Header, Skills, Testimonial, Work } from "@/container";
import About from "@/container/About/About";
const page = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      {/* <About /> */}
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default page;
