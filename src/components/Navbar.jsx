import { Menu, Rocket, Sparkles } from "lucide-react"

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#02C69A] to-[#00FFC6] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,198,0.35)]">
            <Rocket className="h-5 w-5 text-[#202020]" />
          </div>
          <div className="leading-tight">
            <p className="text-[#FEFEFE] font-semibold tracking-tight">Automations Club</p>
            <p className="text-xs text-white/50">Baton Rouge • LA</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-white/70">
          <a href="#features" className="hover:text-[#00FFC6] transition-colors">Features</a>
          <a href="#how" className="hover:text-[#00FFC6] transition-colors">How it works</a>
          <a href="#contact" className="hover:text-[#00FFC6] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden sm:inline-flex bg-white/5 hover:bg-white/10 text-[#FEFEFE] border border-white/10 rounded-lg px-4 py-2 text-sm transition-colors">View Pricing</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-br from-[#02C69A] to-[#00FFC6] text-[#202020] font-semibold rounded-lg px-4 py-2 text-sm shadow-[0_10px_30px_-10px_rgba(0,255,198,0.6)] hover:brightness-110 transition">
            <Sparkles className="h-4 w-4" />
            Book Intro Call
          </a>
          <button className="md:hidden p-2 text-white/70 hover:text-white"><Menu className="h-6 w-6" /></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
