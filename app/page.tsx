import { EventDescription } from "../components/event-description";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { RegistrationForm } from "../components/registration-form";
import { VenueSection } from "../components/venue-section";


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
