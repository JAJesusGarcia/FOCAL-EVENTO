export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand logos */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                Marcas Participantes
              </h3>
              <div className="flex flex-col gap-2">
                <span className="text-foreground">FOCAL</span>
                <span className="text-foreground">AUSTRIAN AUDIO</span>
              </div>
            </div>

            {/* Organizer */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Organiza</h3>
              <div>
                <span className="text-foreground font-semibold">Audio Arte</span>
                <p className="text-sm text-muted-foreground mt-1">San Martín 1128, Rosario</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Contacto</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Para consultas sobre el evento</p>
                <p className="text-foreground">info@audioarte.com</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Audio Arte. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
