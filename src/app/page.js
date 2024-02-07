import { Navbar } from "@/components";
import "./page.scss";
import { Footer, Header, Skills, Work } from "@/container";
import Floating from "@/components/Floating";
const page = () => {
  return (
    <div className="app">
      {/* <Navbar />
      <Floating /> */}
      {/* <Header /> */}
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default page;
