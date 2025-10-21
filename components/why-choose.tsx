"use client"

export function WhyChoose() {
  const features = [
    {
      icon: "🌊",
      title: "Lakeside Paradise",
      description: "Located beside 300-year-old Ameenpur Lake. Wake up to serene water views daily.",
    },
    {
      icon: "🏢",
      title: "Prime Location",
      description: "5 mins to D-Mart, 10 mins to Miyapur Metro, 15 mins to Hitech City.",
    },
    {
      icon: "🏊",
      title: "1 Lakh Sq.Ft Clubhouse",
      description: "5-storey luxury with gym, pool, spa, theatre, banquet & 30+ amenities.",
    },
    {
      icon: "🌳",
      title: "75% Open Space",
      description: "Maximum green cover, central parks, tree walks & open-air theatre.",
    },
    {
      icon: "✅",
      title: "IGBC Certified",
      description: "Green building with rainwater harvesting, solar panels & sustainable design.",
    },
    {
      icon: "🦅",
      title: "Bird Sanctuary",
      description: "Close to biodiversity heritage site. Perfect for nature lovers.",
    },
    {
      icon: "🔒",
      title: "Premium Security",
      description: "24/7 CCTV, gated community, boom barriers & professional security.",
    },
    {
      icon: "⚡",
      title: "Power Backup",
      description: "Full DG backup for lifts, common areas & emergency lighting.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why Choose Everest 2BHK?</h2>
          <p className="text-lg text-muted-foreground">Premium features that make your investment worthwhile</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
