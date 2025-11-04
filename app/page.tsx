import { HeroSection } from "@/components/hero-section"
import { EventDescription } from "@/components/event-description"
import { RegistrationForm } from "@/components/registration-form"
import { VenueSection } from "@/components/venue-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EventDescription />
      <RegistrationForm />
      <VenueSection />
      <Footer />
    </main>
  )
}
