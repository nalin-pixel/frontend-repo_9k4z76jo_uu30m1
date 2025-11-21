import { Menu, Rocket, Sparkles, Sun, Moon } from "lucide-react"

function Navbar({ theme = "dark", onToggleTheme }) {
  const isDark = theme === "dark"
  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[var(--accent-from)] to-[var(--accent-to)] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,198,0.35)]">
            <Rocket className="h-5 w-5 text-[var(--on-accent)]" />
          </div>
          <div className="leading-tight">
            <p className="text-[var(--text)] font-semibold tracking-tight">Automations Club</p>
            <p className="text-xs text-[color:var(--text-muted)]">Baton Rouge • LA</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[color:var(--text-muted)]">
          <a href="#features" className="hover:text-[var(--accent-to)] transition-colors">Features</a>
          <a href="#how" className="hover:text-[var(--accent-to)] transition-colors">How it works</a>
          <a href="#contact" className="hover:text-[var(--accent-to)] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center justify-center rounded-lg border border-[color:var(--border)] bg-[var(--panel)] hover:bg-[var(--panel-hover)] text-sm px-2.5 py-2 transition"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="#cta" className="hidden sm:inline-flex bg-[var(--panel)] hover:bg-[var(--panel-hover)] text-[var(--text)] border border-[color:var(--border)] rounded-lg px-4 py-2 text-sm transition-colors">View Pricing</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-br from-[var(--accent-from)] to-[var(--accent-to)] text-[var(--on-accent)] font-semibold rounded-lg px-4 py-2 text-sm shadow-[0_10px_30px_-10px_rgba(0,255,198,0.6)] hover:brightness-110 transition">
            <Sparkles className="h-4 w-4" />
            Book Intro Call
          </a>
          <button className="md:hidden p-2 text-[color:var(--text-muted)] hover:text-[var(--text)]"><Menu className="h-6 w-6" /></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
