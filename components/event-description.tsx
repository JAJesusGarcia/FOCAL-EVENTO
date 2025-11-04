import { Award, Users, Zap } from "lucide-react"

export function EventDescription() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main description */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Una experiencia única en audio profesional</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Únete a nosotros en un evento exclusivo donde descubrirás las últimas innovaciones en equipamiento de
              audio profesional. Conoce de cerca los productos FOCAL y AUSTRIAN AUDIO, dos marcas líderes en la
              industria del sonido.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Sorteos Exclusivos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Participa por increíbles premios de las marcas FOCAL y AUSTRIAN AUDIO.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Networking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conecta con profesionales del audio y expande tu red de contactos.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Demostraciones</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experimenta en vivo la calidad y tecnología de los equipos más avanzados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
