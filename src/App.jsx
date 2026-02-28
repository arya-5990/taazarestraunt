import Hero from './components/Hero'
import SignatureDishes from './components/SignatureDishes'
import ArabicExperience from './components/ArabicExperience'
import BreakfastSection from './components/BreakfastSection'
import MenuPreview from './components/MenuPreview'
import SocialProof from './components/SocialProof'
import ServicesSection from './components/ServicesSection'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import Particles from './components/Particles'

function App() {
  return (
    <>
      <Particles />

      <main>
        <Hero />

        <div className="section-divider" />

        <SignatureDishes />

        <div className="section-divider" />

        <ArabicExperience />

        <div className="section-divider" />

        <BreakfastSection />

        <div className="section-divider" />

        <MenuPreview />

        <div className="section-divider" />

        <SocialProof />

        <div className="section-divider" />

        <ServicesSection />

        <div className="section-divider" />

        <CTABanner />

        <Footer />
      </main>
    </>
  )
}

export default App
