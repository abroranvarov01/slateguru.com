import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FeaturedReviews } from "@/components/featured-reviews"
import { ComparisonTool } from "@/components/comparison-tool"
import { ExpertOpinions } from "@/components/expert-opinions"
import { BuyingGuide } from "@/components/buying-guide"
import { LatestNews } from "@/components/latest-news"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedReviews />
        <ComparisonTool />
        <ExpertOpinions />
        <BuyingGuide />
        <LatestNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
