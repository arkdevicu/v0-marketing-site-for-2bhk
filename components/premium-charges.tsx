"use client"

import { Check } from "lucide-react"

export function PremiumCharges() {
  const premiumCharges = [
    { label: "East Facing", price: "Rs.100/-", unit: "per SFT" },
    { label: "Corner Unit", price: "Rs.100/-", unit: "per SFT" },
    { label: "Park View", price: "Rs.100/-", unit: "per SFT" },
    { label: "Club House", price: "Rs.200/-", unit: "per SFT" },
    { label: "Lakeview", price: "Rs.500/-", unit: "per SFT" },
  ]

  const carParking = [
    { level: "Cellar 1", price: "3L", note: "Subject to availability" },
    { level: "Cellar 2", price: "2.5L", note: "Subject to availability" },
    { level: "Cellar 3", price: "2L", note: "Subject to availability" },
    { level: "6th Floor onwards (FRC)", price: "Rs.20/-", note: "per SFT Each per Floor" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Premium Charges</h2>
          <p className="text-lg text-muted-foreground">Transparent pricing for premium features and amenities</p>
        </div>

        {/* Premium Charges Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Location & View Premiums</h3>
            <div className="space-y-4">
              {premiumCharges.map((charge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-primary/10"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{charge.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {charge.price} {charge.unit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Car Parking */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Car Parking Options</h3>
            <div className="space-y-4">
              {carParking.map((parking, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-primary/10"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{parking.level}</p>
                    <p className="text-sm text-muted-foreground">
                      {parking.price} - {parking.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Note:</span> All prices are subject to change. Please contact us for the
            latest pricing and availability.
          </p>
        </div>
      </div>
    </section>
  )
}
