import { Award, Shield, Users, Zap } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Unbiased Reviews",
      description:
        "We test every tablet independently with no manufacturer influence on our ratings or recommendations.",
    },
    {
      icon: Award,
      title: "Expert Testing",
      description: "Our team of tech experts rigorously tests performance, battery life, display quality, and more.",
    },
    {
      icon: Zap,
      title: "Real-World Usage",
      description: "We use tablets in everyday scenarios to provide practical insights you can trust.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our recommendations are shaped by feedback from thousands of tablet users worldwide.",
    },
  ]

  return (
    <section id="about" className="border-b border-border py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            About SlateGuru
          </h2>
          <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground">
            We're dedicated to helping you navigate the ever-evolving world of tablet technology. Our mission is to
            provide honest, comprehensive reviews that empower consumers to make confident purchasing decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
