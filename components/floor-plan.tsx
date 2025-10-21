"use client"

import Image from "next/image"

interface RoomDetail {
  name: string
  dimensions: string
  icon: string
}

const roomDetails: RoomDetail[] = [
  { name: "Master Bedroom", dimensions: "15'-6\" x 11'-6\"", icon: "🛏️" },
  { name: "Bedroom", dimensions: "11'-9\" x 11'-3\"", icon: "🛏️" },
  { name: "Living Room", dimensions: "12'-3\" x 12'-0\"", icon: "🛋️" },
  { name: "Dining Area", dimensions: "16'-0\" x 10'-0\"", icon: "🍽️" },
  { name: "Kitchen", dimensions: "8'-6\" x 12'-0\"", icon: "🍳" },
  { name: "Toilet 1", dimensions: "7'-9\" x 4'-6\"", icon: "🚿" },
  { name: "Toilet 2", dimensions: "7'-9\" x 5'-0\"", icon: "🚿" },
  { name: "Balcony", dimensions: "50' Wide", icon: "🌳" },
]

export function FloorPlan() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">2BHK Floor Plan</h2>
          <p className="text-muted-foreground text-lg">Thoughtfully designed spaces for modern living</p>
        </div>

        {/* Floor Plan Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg bg-white p-4">
          <Image
            src="/2bhk-floor-plan.jpg"
            alt="2BHK Floor Plan - 1335 SFT"
            width={800}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Key Details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-card rounded-lg p-4 border border-border">
            <p className="text-muted-foreground text-sm mb-1">Total Area</p>
            <p className="text-2xl font-bold text-primary">1335 SFT</p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border">
            <p className="text-muted-foreground text-sm mb-1">Configuration</p>
            <p className="text-2xl font-bold text-primary">2 BHK</p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border">
            <p className="text-muted-foreground text-sm mb-1">Series</p>
            <p className="text-2xl font-bold text-primary">6, 7, 8</p>
          </div>
        </div>

        {/* Room Details Grid */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">Room Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {roomDetails.map((room, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 border border-border hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{room.icon}</div>
                <p className="font-semibold text-foreground text-sm mb-1">{room.name}</p>
                <p className="text-muted-foreground text-xs">{room.dimensions}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
