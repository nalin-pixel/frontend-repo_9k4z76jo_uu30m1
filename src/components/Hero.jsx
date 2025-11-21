import { motion } from "framer-motion"
import { Star, Sparkles, Rocket } from "lucide-react"

function GradientOrb({ className = "" }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-30 ${className}`} style={{ background: "radial-gradient(closest-side, #00FFC6, transparent)" }} />
  )
}

const BRAND_IMG = "https://storage.googleapis.com/msgsndr/izRuEqjz2WA6Oud0b2a0/media/6916bec11c143ab4f6f86725.png"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Space background */}
      <div className="absolute inset-0 bg-[#0E0E0E]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(0,255,198,0.06), transparent 40%), radial-gradient(circle at 80% 10%, rgba(2,198,154,0.07), transparent 45%), radial-gradient(circle at 50% 90%, rgba(0,255,198,0.05), transparent 50%)" }} />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      {/* Glows */}
      <GradientOrb className="w-[600px] h-[600px] -top-40 -left-40" />
      <GradientOrb className="w-[500px] h-[500px] -bottom-40 -right-32" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4">
              <Star className="h-3.5 w-3.5 text-[#00FFC6]" />
              Trusted by local businesses across Baton Rouge
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FEFEFE]">
              Automate reviews. Win more customers.
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Automations Club turns happy customers into growth. We trigger review requests, reply with AI, and turn 5-star feedback into scroll-stopping posts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#02C69A] to-[#00FFC6] px-6 py-3 font-semibold text-[#202020] shadow-[0_20px_80px_-20px_rgba(0,255,198,0.6)] hover:brightness-110 transition">
                <Rocket className="h-5 w-5" />
                Book Intro Call
              </a>
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition">
                View Pricing
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {[
                { label: "Avg. stars", value: "4.9" },
                { label: "Time saved", value: "12h/wk" },
                { label: "Posts created", value: "+300" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-[#FEFEFE]">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand focal image */}
          <div className="relative">
            {/* Outer halo/rings to emphasize the brand visual */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(closest-side, rgba(0,255,198,0.5), transparent)" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#00FFC6]/20" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#00FFC6]/10" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm shadow-[0_30px_120px_-30px_rgba(0,255,198,0.35)]"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#0f0f10] relative">
                <img
                  src={BRAND_IMG}
                  alt="Automations Club brand artwork"
                  className="h-full w-full object-contain"
                  loading="eager"
                />

                {/* Subtle top glow */}
                <div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-[#00FFC6]/25 to-transparent" />
                {/* Gradient border sheen */}
                <div className="pointer-events-none absolute inset-0 rounded-xl" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }} />
              </div>

              {/* Accent label chip */}
              <div className="absolute -top-6 -right-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#00FFC6]/10 px-3 py-1 text-xs text-[#00FFC6] border border-[#00FFC6]/30">
                  <Sparkles className="h-3.5 w-3.5" />
                  Brand-first design
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
