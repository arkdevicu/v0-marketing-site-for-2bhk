export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/everest-2bhk-exterior.png"
          alt="Everest 2BHK Luxury Apartments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
          Modern Living Redefined
        </h1>
        <p className="text-lg md:text-xl text-gray-100 leading-relaxed text-balance max-w-2xl mx-auto">
          Experience luxury and comfort in our thoughtfully designed 2BHK apartments. Perfect for families and
          professionals seeking contemporary urban living.
        </p>
      </div>
    </section>
  )
}
