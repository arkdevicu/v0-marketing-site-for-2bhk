import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProjectOverview } from "@/components/project-overview"
import { Features } from "@/components/features"
import { Amenities } from "@/components/amenities"
import { Footer } from "@/components/footer"
import { FloorPlan } from "@/components/floor-plan"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectOverview />
      <Features />
      <Amenities />
      <FloorPlan />
      <Footer />
    </main>
  )
}
