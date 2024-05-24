import Project from "./assets/component/Project";
import Hero from "./assets/component/Hero";
import Nav from "./assets/component/Nav";
import Skill from "./assets/component/Skills";
import Contact from "./assets/component/Contact";
import Footer from "./assets/component/Footer";

export default function App() {
  return (
    <main className="relative">
      <div className="px-14">
        <Nav />
      </div>
      <div className="px-[4.5rem]">
        <Hero />
      </div>
      <div className="bg-card-color pb-10">
        <Project />
      </div>
      <div className="px-[4.5rem]">
        <Skill />
      </div>
      <div className="px-[4.5rem] bg-card-color border-y-2 border-primary">
        <Contact />
      </div>
      <div className="px-[4.5rem] ">
        <Footer />
      </div>
    </main>
  );
}
