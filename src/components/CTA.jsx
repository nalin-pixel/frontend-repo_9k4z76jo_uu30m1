import { ArrowRight } from "lucide-react"

function CTA() {
  return (
    <section id="cta" className="relative">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 80% 0%, var(--subtle-glow), transparent 45%)" }} />

      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="rounded-3xl border border-[color:var(--border)] bg-[var(--panel)] p-10 backdrop-blur-sm">
          <h3 className="text-3xl font-bold">See how much time you can save</h3>
          <p className="mt-3 text-[color:var(--text-muted)] max-w-2xl mx-auto">Connect your tools and watch review requests, replies, and social posts run on autopilot. We’ll tailor it for your Baton Rouge market.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[var(--accent-from)] to-[var(--accent-to)] px-6 py-3 font-semibold text-[var(--on-accent)] shadow-[0_20px_80px_-20px_rgba(0,255,198,0.6)] hover:brightness-110 transition">
              Book Intro Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-[color:var(--border)] bg-[var(--panel)] text-[color:var(--text-muted)] hover:bg-[var(--panel-hover)] transition">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
