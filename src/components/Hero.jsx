import { motion } from "framer-motion"
import { Star, Sparkles, Rocket } from "lucide-react"

function GradientOrb({ className = "" }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-30 ${className}`} style={{ background: "radial-gradient(closest-side, #00FFC6, transparent)" }} />
  )
}

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

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#141414] grid grid-cols-6 gap-1 p-3">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="h-16 rounded bg-gradient-to-b from-[#0E0E0E] to-[#121212] relative overflow-hidden">
                    <div className="absolute inset-x-0 -top-6 h-12 bg-gradient-to-b from-transparent to-[#00FFC6]/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,198,0.08),transparent_60%)]" />
                  </div>
                ))}
              </div>
              <div className="absolute -inset-0.5 rounded-2xl border border-transparent [mask-image:linear-gradient(0deg,black,transparent)]" style={{ background: "linear-gradient(120deg, rgba(0,255,198,0.25), rgba(2,198,154,0.25), transparent)" }} />
            </motion.div>
            <div className="absolute -top-6 -right-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00FFC6]/10 px-3 py-1 text-xs text-[#00FFC6] border border-[#00FFC6]/30">
                <Sparkles className="h-3.5 w-3.5" />
                AI-generated replies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
