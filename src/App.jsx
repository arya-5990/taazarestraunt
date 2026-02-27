import Hero from './components/Hero'
import LiveMenu from './components/LiveMenu'
import VibeGallery from './components/VibeGallery'
import SocialProof from './components/SocialProof'
import StickyBottomBar from './components/StickyBottomBar'
import Footer from './components/Footer'
import Particles from './components/Particles'

function App() {
  return (
    <>
      <Particles />

      <main>
        <Hero />

        <div className="section-divider" />

        <LiveMenu />

        <div className="section-divider" />

        <VibeGallery />

        <div className="section-divider" />

        <SocialProof />

        <div className="section-divider" />

        <Footer />
      </main>

      <StickyBottomBar />
    </>
  )
}

export default App
