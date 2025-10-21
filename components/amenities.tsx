import {
  Building2,
  Leaf,
  Dumbbell,
  Music,
  Users,
  Utensils,
  Waves,
  Zap,
  Shield,
  Cog as Yoga,
  Armchair,
} from "lucide-react"

const amenitiesData = [
  {
    name: "Entrance/Exit Plaza with Security Cabin",
    icon: Shield,
    category: "Security",
  },
  {
    name: "Entrance Water Feature with Colonnade",
    icon: Waves,
    category: "Landscape",
  },
  {
    name: "Floral Garden with Sculpture Court",
    icon: Leaf,
    category: "Landscape",
  },
  {
    name: "Multipurpose Zone - Yoga",
    icon: Yoga,
    category: "Wellness",
  },
  {
    name: "Outdoor Fitness Zone",
    icon: Dumbbell,
    category: "Fitness",
  },
  {
    name: "Leisure Pavilion",
    icon: Armchair,
    category: "Recreation",
  },
  {
    name: "Reflexology Pathway",
    icon: Leaf,
    category: "Wellness",
  },
  {
    name: "Outdoor Music Court",
    icon: Music,
    category: "Recreation",
  },
  {
    name: "Informal Amphitheatre with Canopy",
    icon: Users,
    category: "Recreation",
  },
  {
    name: "Bus Bay",
    icon: Building2,
    category: "Convenience",
  },
  {
    name: "Clubhouse Spillover Space",
    icon: Users,
    category: "Social",
  },
  {
    name: "Meditation Pavilion",
    icon: Yoga,
    category: "Wellness",
  },
  {
    name: "Gathering & Aerobics",
    icon: Dumbbell,
    category: "Fitness",
  },
  {
    name: "Outdoor Seating Plaza",
    icon: Armchair,
    category: "Recreation",
  },
  {
    name: "Senior Citizen Exercise Station",
    icon: Dumbbell,
    category: "Fitness",
  },
  {
    name: "Outdoor Cafeteria Spillover",
    icon: Utensils,
    category: "Dining",
  },
  {
    name: "Water Feature with Weeping Wall",
    icon: Waves,
    category: "Landscape",
  },
  {
    name: "Interactive Spaces",
    icon: Zap,
    category: "Recreation",
  },
]

export function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">World-Class Amenities</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury living with our comprehensive range of premium amenities designed for every lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {amenitiesData.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-5 md:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary/70 uppercase tracking-wide mt-1">
                      {amenity.category}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {amenity.name}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
