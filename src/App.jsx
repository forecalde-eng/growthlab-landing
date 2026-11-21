import { MotionConfig } from "framer-motion";
import Hero, { Navbar } from "./sections/Hero";
import { Pillars, Contrast, Services, Ecosystem, Showcase, VideoSection, Niches, Process } from "./sections/Offer";
import Pricing from "./sections/Pricing";
import { FAQ, CTA, Footer, FloatingWA, LeadForm } from "./sections/Closing";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink text-white font-body">
        <Navbar />
        <main>
          <Hero />
          <Niches />
          <VideoSection />
          <Pillars />
          <Contrast />
          <Services />
          <Ecosystem />
          <Showcase />
          <Process />
          <Pricing />
          <FAQ />
          <LeadForm />
          <CTA />
        </main>
        <Footer />
        <FloatingWA />
      </div>
    </MotionConfig>
  );
}
