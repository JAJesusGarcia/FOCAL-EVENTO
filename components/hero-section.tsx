import { Calendar, MapPin, Ticket } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center texture-overlay overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logos placeholder */}
          <div className="flex items-center justify-center gap-8 mb-12 opacity-0 animate-fade-in-up">
            <div className="w-32 h-16 bg-secondary rounded-lg flex items-center justify-center border border-border">
              <span className="text-xs text-muted-foreground">FOCAL</span>
            </div>
            <div className="w-32 h-16 bg-secondary rounded-lg flex items-center justify-center border border-border">
              <span className="text-xs text-muted-foreground">AUSTRIAN AUDIO</span>
            </div>
            <div className="w-32 h-16 bg-secondary rounded-lg flex items-center justify-center border border-border">
              <span className="text-xs text-muted-foreground">AUDIO ARTE</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4 opacity-0 animate-fade-in-up delay-100">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">FOCAL + AUSTRIAN AUDIO</h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">en Audio Arte</p>
          </div>

          {/* Event details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg opacity-0 animate-fade-in-up delay-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">25 de Noviembre</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-muted" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Auditorio Audio Arte</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-muted" />
            <div className="flex items-center gap-2">
              <Ticket className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Entrada Gratuita</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 opacity-0 animate-fade-in-up delay-300">
            <a
              href="#registro"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              Registrarme Ahora
            </a>
          </div>

          {/* Additional info */}
          <p className="text-sm text-muted-foreground opacity-0 animate-fade-in-up delay-400">
            Cupos limitados • Sorteos exclusivos
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
