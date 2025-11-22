import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"

export function FeaturedReviews() {
  const reviews = [
    {
      name: 'iPad Pro 13" M4',
      category: "Premium",
      rating: 9.4,
      image: "/ipad-pro-tablet-premium.jpg",
      summary: "The ultimate powerhouse for creative professionals and demanding users.",
      pros: ["Exceptional performance", "Stunning display", "Long battery life"],
    },
    {
      name: "Samsung Galaxy Tab S9",
      category: "Android",
      rating: 9.1,
      image: "/samsung-galaxy-tab-tablet.jpg",
      summary: "Best Android tablet with S Pen and DeX desktop mode included.",
      pros: ["Versatile ecosystem", "S Pen included", "Great display"],
    },
    {
      name: "Microsoft Surface Pro 10",
      category: "Windows",
      rating: 8.8,
      image: "/microsoft-surface-pro-tablet.jpg",
      summary: "Perfect 2-in-1 device for productivity and professional workflows.",
      pros: ["Full Windows experience", "Type Cover support", "Business ready"],
    },
  ]

  return (
    <section id="reviews" className="border-b border-border py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">Featured Reviews</h2>
            <p className="text-muted-foreground">Our most popular tablet reviews this month</p>
          </div>
          <Button variant="ghost" className="gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute right-4 top-4 bg-background/90 backdrop-blur">{review.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold">{review.rating}</span>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{review.summary}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {review.pros.map((pro, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {pro}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  Read Full Review
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
