import { CheckCircle2 } from "lucide-react"

const amenities = [
  "Entrance/Exit Plaza with Security Cabin",
  "Entrance Water Feature with Colonnade",
  "Floral Garden with Sculpture Court",
  "Multipurpose Zone - Yoga",
  "Outdoor Fitness Zone - Common for Elder & Youth",
  "Leisure Pavilion",
  "Reflexology Pathway",
  "Outdoor Music Court",
  "Informal Amphitheatre with Canopy Above",
  "Bus Bay",
  "Clubhouse Spillover Space",
  "Meditation Pavilion",
  "Gathering & Aerobics",
  "Outdoor Seating Plaza",
  "Senior Citizen Exercise Station",
  "Outdoor Cafeteria Spillover",
  "Water Feature with Weeping Wall",
  "Interactive Spaces",
]

export function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">World-Class Amenities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury living with our comprehensive range of premium amenities designed for every lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            {amenities.slice(0, 9).map((amenity, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-sm md:text-base">{amenity}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {amenities.slice(9).map((amenity, index) => (
              <div key={index + 9} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-sm md:text-base">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
