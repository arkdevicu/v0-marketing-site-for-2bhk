import { Zap, Home, Shield, Leaf } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "Spacious Layout",
    description: "1,200+ sq ft of thoughtfully designed living space with premium finishes",
  },
  {
    icon: Zap,
    title: "Smart Home Ready",
    description: "Pre-wired for smart home automation and energy-efficient systems",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Advanced security systems with CCTV and professional security staff",
  },
  {
    icon: Leaf,
    title: "Green Living",
    description: "Sustainable design with rainwater harvesting and solar panels",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Premium Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every detail is crafted to enhance your lifestyle and comfort
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-background p-6 md:p-8 rounded-xl border border-border hover:border-primary transition hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
