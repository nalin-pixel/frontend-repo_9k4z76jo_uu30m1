import { MessageSquare, Reply, Share2, Zap, ShieldCheck, Gauge } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Automated Requests",
    desc: "Trigger review invites by SMS and email after every visit—hands-off and on-brand.",
    tag: "Flows"
  },
  {
    icon: Reply,
    title: "AI Replies",
    desc: "On-voice responses crafted by AI to match your tone, with approvals when you want.",
    tag: "AI"
  },
  {
    icon: Share2,
    title: "Repurpose to Social",
    desc: "Turn 5-star reviews into social posts sized for reels, stories, and feeds in seconds.",
    tag: "Content"
  },
  {
    icon: ShieldCheck,
    title: "Reputation Guard",
    desc: "Catch negative feedback early with private surveys and smart escalation.",
    tag: "Trust"
  },
  {
    icon: Gauge,
    title: "Local SEO Lift",
    desc: "Steadier review velocity and keyword-rich replies boost map rankings.",
    tag: "SEO"
  },
  {
    icon: Zap,
    title: "One-Click Setup",
    desc: "Connect your POS or calendar and go live the same day—no heavy lift.",
    tag: "Speed"
  }
]

function Features() {
  return (
    <section id="features" className="relative">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(0,255,198,0.05), transparent 45%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FEFEFE] tracking-tight">Everything you need to win reviews</h2>
          <p className="mt-4 text-white/70">Purpose-built for local businesses in Baton Rouge and beyond.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, tag }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition group">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,255,198,0.15), transparent)" }} />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#02C69A] to-[#00FFC6] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#202020]" />
                </div>
                <span className="text-xs text-[#00FFC6] border border-[#00FFC6]/30 bg-[#00FFC6]/10 rounded-full px-2 py-0.5">{tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#FEFEFE]">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
