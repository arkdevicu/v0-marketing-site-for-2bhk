export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-balance">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Modern Living Redefined
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Experience luxury and comfort in our thoughtfully designed 2BHK apartments. Perfect for families and
            professionals seeking contemporary urban living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition">
              Schedule Tour
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative h-96 md:h-full min-h-96">
          <img
            src="/modern-luxury-2bhk-apartment-interior-design.jpg"
            alt="Luxury 2BHK apartment"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
        </div>
      </div>
    </section>
  )
}
