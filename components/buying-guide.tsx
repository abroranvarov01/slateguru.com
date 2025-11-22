import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, Battery, Monitor, DollarSign, Wifi, Pencil } from "lucide-react"

export function BuyingGuide() {
  const factors = [
    {
      icon: Cpu,
      title: "Performance",
      description: "Consider processor power for your workload - from casual browsing to professional creative work.",
    },
    {
      icon: Monitor,
      title: "Display",
      description: "Screen size, resolution, and refresh rate matter for your viewing experience and comfort.",
    },
    {
      icon: Battery,
      title: "Battery Life",
      description: "Evaluate real-world usage time based on your typical daily activities and charging habits.",
    },
    {
      icon: DollarSign,
      title: "Budget",
      description:
        "Set realistic expectations - premium features come at premium prices, but value exists at all levels.",
    },
    {
      icon: Wifi,
      title: "Connectivity",
      description: "Decide between WiFi-only or cellular models based on your mobility needs.",
    },
    {
      icon: Pencil,
      title: "Accessories",
      description: "Factor in stylus, keyboard, and case costs when calculating total investment.",
    },
  ]

  return (
    <section id="guides" className="border-b border-border bg-muted/20 py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">Buying Guide</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Key factors to consider when choosing your next tablet
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {factors.map((factor, index) => {
            const Icon = factor.icon
            return (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{factor.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mx-auto max-w-3xl border-accent/50 bg-accent/5">
          <CardContent className="p-8 text-center">
            <h3 className="mb-3 text-2xl font-semibold">Need Personalized Recommendations?</h3>
            <p className="mb-6 text-muted-foreground">
              Take our interactive quiz to find the perfect tablet based on your specific needs and preferences.
            </p>
            <Button size="lg" variant="default">
              Start Tablet Finder Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
