const features = [
  {
    title: "Location",
    description: "AMEENPUR",
  },
  {
    title: "Approval",
    description: "HMDA & RERA",
  },
  {
    title: "Project Type",
    description: "LUXURIOUS HIGHRISE GATED COMMUNITY APARTMENTS",
  },
  {
    title: "Total Acres",
    description: "15.2 Acres",
  },
  {
    title: "Number of Units",
    description: "3054",
  },
  {
    title: "Total Floors",
    description: "3C+S+39",
  },
  {
    title: "Facing",
    description: "EAST & WEST",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Project Details</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive information about Everest</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="bg-background p-6 md:p-8 rounded-xl border border-border hover:border-primary transition hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
