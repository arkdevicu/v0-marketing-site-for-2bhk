export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold mb-3">EVEREST</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">The Peak of High Life</p>
            <p className="text-primary-foreground/70 text-sm">
              Premium 2BHK apartments designed for modern living in Ameenpur, Hyderabad.
            </p>
          </div>

          {/* Contact section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">📞</span>
                <div>
                  <p className="text-primary-foreground/70">Phone</p>
                  <p className="font-semibold text-primary-foreground">+91 [Phone Number]</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">📍</span>
                <div>
                  <p className="text-primary-foreground/70">Location</p>
                  <p className="font-semibold text-primary-foreground">Ameenpur, Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">✉️</span>
                <div>
                  <p className="text-primary-foreground/70">Email</p>
                  <p className="font-semibold text-primary-foreground">info@everestappartments.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#floor-plan"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Floor Plan
                </a>
              </li>
              <li>
                <a
                  href="#premium-charges"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-sm text-primary-foreground/70">
            <p>&copy; 2025 Everest Apartments. All rights reserved.</p>
            <p className="mt-2 text-xs text-primary-foreground/60">Luxury Living at The Peak of High Life</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
