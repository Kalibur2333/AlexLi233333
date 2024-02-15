import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Job,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Job />
        <Works />
        <Footer />
        {
          //<Feedbacks />
        }

        {/*<div className="relative z-0">
          <Contact />
          <StarsCanvas />
  </div>*/}
      </div>
    </BrowserRouter>
  );
};

export default App;
