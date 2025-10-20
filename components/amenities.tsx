import { Wifi, Dumbbell, Droplet, Trees, Zap, Shield } from "lucide-react"

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Droplet, label: "Swimming Pool" },
  { icon: Trees, label: "Landscaped Gardens" },
  { icon: Zap, label: "Power Backup" },
  { icon: Shield, label: "Security Gate" },
]

export function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">World-Class Amenities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enjoy a lifestyle of comfort with our comprehensive amenities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="bg-background p-6 md:p-8 rounded-xl border border-border hover:border-primary transition text-center hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm md:text-base">{amenity.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
