import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden noise">
      {/* Custom Cursor + Scroll Progress */}
      <CustomCursor />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}
