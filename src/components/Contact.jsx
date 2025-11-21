import { useEffect } from "react"

function Contact() {
  useEffect(() => {
    // Inject the external script once
    const id = "automationsclub-form-embed"
    if (!document.getElementById(id)) {
      const s = document.createElement("script")
      s.src = "https://link.automationsclub.com/js/form_embed.js"
      s.async = true
      s.id = id
      document.body.appendChild(s)
    }
  }, [])

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 0% 20%, rgba(0,255,198,0.06), transparent 45%)" }} />

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-[#FEFEFE]">Book an intro call</h2>
          <p className="mt-2 text-white/70">Tell us about your business and well tailor a quick walkthrough.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
          <div className="w-full" style={{ height: 600 }}>
            <iframe
              src="https://link.automationsclub.com/widget/form/gG90abSHC8gGrbx4HeYR"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: 10 }}
              id="inline-gG90abSHC8gGrbx4HeYR"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact Form"
              data-height="583"
              data-layout-iframe-id="inline-gG90abSHC8gGrbx4HeYR"
              data-form-id="gG90abSHC8gGrbx4HeYR"
              title="Contact Form"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
