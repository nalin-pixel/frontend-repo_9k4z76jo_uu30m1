import { ArrowRight } from "lucide-react"

function CTA() {
  return (
    <section id="cta" className="relative">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 80% 0%, rgba(0,255,198,0.06), transparent 45%)" }} />

      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-[#FEFEFE]">See how much time you can save</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Connect your tools and watch review requests, replies, and social posts run on autopilot. We’ll tailor it for your Baton Rouge market.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#02C69A] to-[#00FFC6] px-6 py-3 font-semibold text-[#202020] shadow-[0_20px_80px_-20px_rgba(0,255,198,0.6)] hover:brightness-110 transition">
              Book Intro Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
