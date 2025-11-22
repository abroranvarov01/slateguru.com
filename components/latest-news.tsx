import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp } from "lucide-react"

export function LatestNews() {
  const news = [
    {
      title: "Apple Announces Next-Gen iPad Air with M3 Chip",
      category: "Breaking News",
      date: "2 hours ago",
      excerpt:
        "Apple's latest iPad Air brings professional-grade performance to the mid-range tablet market with surprising affordability.",
      image: "/apple-ipad-air-announcement.jpg",
      trending: true,
    },
    {
      title: "Samsung Reveals Galaxy Tab S10 Series Launch Date",
      category: "Rumors",
      date: "5 hours ago",
      excerpt:
        "Leaked documents suggest Samsung's next flagship tablets will feature enhanced AI capabilities and improved S Pen latency.",
      image: "/samsung-tablet-launch.jpg",
      trending: false,
    },
    {
      title: "Android 15 Tablet Features: What to Expect",
      category: "Software",
      date: "1 day ago",
      excerpt:
        "Google's upcoming Android release promises better multitasking, improved desktop mode, and enhanced stylus support for tablets.",
      image: "/android-tablet-software.jpg",
      trending: true,
    },
    {
      title: "Best Budget Tablets Under $300 in 2025",
      category: "Guides",
      date: "2 days ago",
      excerpt:
        "Our comprehensive roundup of affordable tablets that don't compromise on essential features and performance.",
      image: "/budget-tablet-comparison.jpg",
      trending: false,
    },
  ]

  return (
    <section id="news" className="border-b border-border py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">Latest News</h2>
            <p className="text-muted-foreground">Stay updated with the latest tablet industry news</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {news.map((item, index) => (
            <Card key={index} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.trending && (
                  <Badge className="absolute left-4 top-4 gap-1 bg-accent">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </Badge>
                )}
                <Badge className="absolute right-4 top-4 bg-background/90 backdrop-blur">{item.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{item.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold leading-tight">{item.title}</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">{item.excerpt}</p>
                <Button variant="link" className="h-auto p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
