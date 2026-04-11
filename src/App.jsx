import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Process from './components/Process'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

const WA_LINK = "https://wa.me/593XXXXXXXXX?text=Hola%2C%20quiero%20una%20demo%20de%20GrowthLab%20AI"

export default function App() {
  return (
    <div className="min-h-screen bg-dark grain">
      <Navbar waLink={WA_LINK} />
      <Hero waLink={WA_LINK} />
      <Problem />
      <Solution />
      <Process />
      <Pricing waLink={WA_LINK} />
      <FAQ />
      <CTAFinal waLink={WA_LINK} />
      <Footer />
    </div>
  )
}
