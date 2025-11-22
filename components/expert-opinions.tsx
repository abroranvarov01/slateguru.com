import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function ExpertOpinions() {
  const experts = [
    {
      name: "Michael Thompson",
      role: "Lead Technology Analyst",
      avatar: "/professional-man-with-glasses-technology-expert.jpg",
      quote:
        "After testing over 200 tablets, I can confidently say the landscape has never been more exciting. Each platform offers unique advantages.",
      initials: "MT",
    },
    {
      name: "Jessica Park",
      role: "Mobile Devices Specialist",
      avatar: "/professional-asian-woman-tech-reviewer.jpg",
      quote:
        "Performance benchmarks only tell part of the story. Real-world usage patterns reveal the true capabilities of modern tablets.",
      initials: "JP",
    },
    {
      name: "Alex Morrison",
      role: "Chief Product Reviewer",
      avatar: "/professional-person-with-short-hair-technology-exp.jpg",
      quote:
        "The best tablet is the one that fits your workflow. Our comprehensive testing helps you find that perfect match.",
      initials: "AM",
    },
  ]

  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">Expert Opinions</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Hear from our team of experienced reviewers who test every device
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-accent/40" />
                <p className="mb-6 leading-relaxed text-muted-foreground">{expert.quote}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={expert.avatar || "/placeholder.svg"} alt={expert.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">{expert.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{expert.name}</div>
                    <div className="text-sm text-muted-foreground">{expert.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
