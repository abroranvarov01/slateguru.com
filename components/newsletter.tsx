import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="mx-auto max-w-3xl border-accent/30 bg-gradient-to-br from-accent/5 to-secondary/5">
          <CardContent className="p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Mail className="h-8 w-8 text-accent" />
            </div>

            <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">Stay in the Loop</h2>

            <p className="mb-8 text-pretty text-muted-foreground">
              Get weekly tablet reviews, buying guides, and exclusive deals delivered straight to your inbox. Join
              25,000+ subscribers who trust SlateGuru.
            </p>

            <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" size="lg" className="sm:w-auto">
                Subscribe
              </Button>
            </form>

            <p className="mt-4 text-xs text-muted-foreground">No spam, unsubscribe anytime. We respect your privacy.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
