"use client"

export function FloorPlan() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">2BHK Floor Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the thoughtfully designed layout of our 2BHK apartments. 1335 SFT of premium living space with
            optimal room dimensions and modern amenities.
          </p>
        </div>

        {/* Floor Plan Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/2bhk-floor-plan.png" alt="2BHK Floor Plan - 1335 SFT" className="w-full h-auto" />
          </div>
        </div>

        {/* Floor Plan Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Total Area</h3>
            <p className="text-2xl font-bold text-primary">1335 SFT</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Configuration</h3>
            <p className="text-2xl font-bold text-primary">2 BHK</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Series</h3>
            <p className="text-2xl font-bold text-primary">6, 7, 8</p>
          </div>
        </div>

        {/* Room Details */}
        <div className="mt-12 bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Room Dimensions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-foreground">Master Bedroom</p>
                <p className="text-muted-foreground">15'-6" x 11'-6"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-foreground">Bed Room</p>
                <p className="text-muted-foreground">11'-9" x 11'-3"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-foreground">Living Room</p>
                <p className="text-muted-foreground">12'-3" x 12'-0"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-foreground">Dining Area</p>
                <p className="text-muted-foreground">16' x 10'-0"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-foreground">Kitchen</p>
                <p className="text-muted-foreground">8'-6" x 12'-0"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-foreground">Sunwide Balcony</p>
                <p className="text-muted-foreground">Premium outdoor space</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
