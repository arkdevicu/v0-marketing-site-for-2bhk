"use client"

import { MapPin, CheckCircle, Building2, Ruler, Home, Layers, Compass } from "lucide-react"

export function ProjectOverview() {
  const details = [
    {
      icon: MapPin,
      label: "Location",
      value: "AMEENPUR",
    },
    {
      icon: CheckCircle,
      label: "Approvals",
      value: "HMDA & RERA",
    },
    {
      icon: Building2,
      label: "Project Type",
      value: "Luxurious Highrise Gated Community",
    },
    {
      icon: Ruler,
      label: "Total Area",
      value: "15.2 Acres",
    },
    {
      icon: Home,
      label: "Total Units",
      value: "3054",
    },
    {
      icon: Layers,
      label: "Total Floors",
      value: "3C+S+39",
    },
    {
      icon: Compass,
      label: "Facing",
      value: "East & West",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Project Overview</h2>
          <p className="text-muted-foreground text-lg">Discover the key highlights of Everest</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => {
            const Icon = detail.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium mb-1">{detail.label}</p>
                    <p className="text-foreground font-semibold text-sm md:text-base">{detail.value}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
