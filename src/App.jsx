import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Logos from "./components/Logos"
import CTA from "./components/CTA"

function App() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      {/* Subtle star field */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40" style={{ backgroundImage: "radial-gradient(1px 1px at 20% 30%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 60% 70%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 80% 20%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 30% 80%, #fff 50%, transparent 51%)" }} />

      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <CTA />

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-lg font-semibold">Automations Club</p>
            <p className="text-white/60 mt-2 text-sm">Baton Rouge, Louisiana</p>
          </div>
          <div>
            <p className="text-sm text-white/50">We help local businesses automate review requests, reply with AI, and repurpose 5-star reviews across social.</p>
          </div>
          <div className="text-sm text-white/60 space-y-2">
            <a href="#features" className="block hover:text-[#00FFC6]">Features</a>
            <a href="#cta" className="block hover:text-[#00FFC6]">Get a demo</a>
          </div>
          <div className="text-sm text-white/60">
            <p>© {new Date().getFullYear()} Automations Club</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
