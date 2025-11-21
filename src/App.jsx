import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Logos from "./components/Logos"
import CTA from "./components/CTA"
import Contact from "./components/Contact"

function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    // Initialize from localStorage or prefers-color-scheme
    const stored = localStorage.getItem("ac-theme")
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
      document.documentElement.setAttribute("data-theme", stored)
    } else {
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      const initial = prefersLight ? "light" : "dark"
      setTheme(initial)
      document.documentElement.setAttribute("data-theme", initial)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("ac-theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"))

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Subtle star field */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, var(--star) 50%, transparent 51%), radial-gradient(1px 1px at 60% 70%, var(--star) 50%, transparent 51%), radial-gradient(1px 1px at 80% 20%, var(--star) 50%, transparent 51%), radial-gradient(1px 1px at 30% 80%, var(--star) 50%, transparent 51%)",
        }}
      />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Logos />
      <Features />
      <CTA />
      <Contact />

      {/* Footer */}
      <footer id="contact" className="border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-lg font-semibold">Automations Club</p>
            <p className="text-[color:var(--text-muted)] mt-2 text-sm">Baton Rouge, Louisiana</p>
          </div>
          <div>
            <p className="text-sm text-[color:var(--text-muted)]">We help local businesses automate review requests, reply with AI, and repurpose 5-star reviews across social.</p>
          </div>
          <div className="text-sm text-[color:var(--text-muted)] space-y-2">
            <a href="#features" className="block hover:text-[var(--accent-to)]">Features</a>
            <a href="#cta" className="block hover:text-[var(--accent-to)]">View Pricing</a>
          </div>
          <div className="text-sm text-[color:var(--text-muted)]">
            <p>© {new Date().getFullYear()} Automations Club</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
