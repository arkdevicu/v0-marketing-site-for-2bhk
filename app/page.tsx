import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChoose } from "@/components/why-choose"
import { Features } from "@/components/features"
import { Amenities } from "@/components/amenities"
import { Footer } from "@/components/footer"
import { FloorPlan } from "@/components/floor-plan"
import { PremiumCharges } from "@/components/premium-charges"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChoose />
      <Features />
      <Amenities />
      <PremiumCharges />
      <FloorPlan />
      <Footer />
    </main>
  )
}
