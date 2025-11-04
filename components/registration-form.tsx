"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from "lucide-react"

interface FormData {
  name: string
  lastName: string
  dni: string
  profession: string
}

export function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    dni: "",
    profession: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "El apellido es requerido"
    }

    if (!formData.dni.trim()) {
      newErrors.dni = "El DNI es requerido"
    } else if (!/^\d+$/.test(formData.dni)) {
      newErrors.dni = "El DNI debe contener solo números"
    }

    if (!formData.profession.trim()) {
      newErrors.profession = "La profesión es requerida"
    } else if (formData.profession.length > 100) {
      newErrors.profession = "La profesión no puede exceder 100 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // TODO: Add database integration here
    // Example with Supabase:
    // const { error } = await supabase
    //   .from('registrations')
    //   .insert([formData])

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", lastName: "", dni: "", profession: "" })
      setIsSuccess(false)
    }, 3000)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <section id="registro" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-primary/50 rounded-lg p-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">¡Registro Exitoso!</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tu inscripción ha sido confirmada. Te esperamos el 25 de Noviembre en Audio Arte. Revisa tu email para
                más detalles.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="registro" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Registrate Ahora</h2>
            <p className="text-muted-foreground">
              Completa el formulario para asegurar tu lugar en este evento exclusivo
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Nombre *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido *</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Tu apellido"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className={errors.lastName ? "border-red-500" : ""}
                disabled={isSubmitting}
              />
              {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
            </div>

            {/* DNI */}
            <div className="space-y-2">
              <Label htmlFor="dni">DNI *</Label>
              <Input
                id="dni"
                type="text"
                placeholder="12345678"
                value={formData.dni}
                onChange={(e) => handleChange("dni", e.target.value)}
                className={errors.dni ? "border-red-500" : ""}
                disabled={isSubmitting}
              />
              {errors.dni && <p className="text-sm text-red-500">{errors.dni}</p>}
            </div>

            {/* Profession */}
            <div className="space-y-2">
              <Label htmlFor="profession">
                Profesión *
                <span className="text-muted-foreground text-sm ml-2">({formData.profession.length}/100)</span>
              </Label>
              <Input
                id="profession"
                type="text"
                placeholder="Ej: Ingeniero de sonido, Productor musical, etc."
                value={formData.profession}
                onChange={(e) => handleChange("profession", e.target.value)}
                maxLength={100}
                className={errors.profession ? "border-red-500" : ""}
                disabled={isSubmitting}
              />
              {errors.profession && <p className="text-sm text-red-500">{errors.profession}</p>}
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Registrando...
                </>
              ) : (
                "Registrarme"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Al registrarte, aceptas recibir información sobre el evento
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
