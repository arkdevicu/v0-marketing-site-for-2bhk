import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Amenities } from "@/components/amenities"
import { FloorPlan } from "@/components/floor-plan"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Amenities />
      <FloorPlan />
      <Footer />
    </main>
  )
}
