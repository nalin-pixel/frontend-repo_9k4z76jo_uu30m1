function Logos() {
  const logos = [
    "https://cdn.simpleicons.org/googlemaps/00FFC6",
    "https://cdn.simpleicons.org/facebook/00FFC6",
    "https://cdn.simpleicons.org/instagram/00FFC6",
    "https://cdn.simpleicons.org/tiktok/00FFC6",
    "https://cdn.simpleicons.org/yelp/00FFC6",
  ]

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-center gap-10 opacity-70 flex-wrap">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="h-6" />)
          )}
        </div>
      </div>
    </section>
  )
}

export default Logos
