import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function ComparisonTool() {
  const comparison = [
    {
      feature: "Display Quality",
      tablets: [true, true, true],
    },
    {
      feature: "Performance",
      tablets: [true, true, false],
    },
    {
      feature: "Battery Life",
      tablets: [true, false, true],
    },
    {
      feature: "Stylus Support",
      tablets: [true, true, false],
    },
    {
      feature: "Desktop Mode",
      tablets: [false, true, true],
    },
  ]

  return (
    <section id="compare" className="border-b border-border bg-muted/20 py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">Compare Side-by-Side</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Use our comparison tool to see how tablets stack up against each other across key features and
            specifications.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl">
          <CardHeader>
            <CardTitle>Top 3 Premium Tablets Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 text-left font-semibold">Feature</th>
                    <th className="pb-4 text-center font-semibold">iPad Pro</th>
                    <th className="pb-4 text-center font-semibold">Galaxy Tab S9</th>
                    <th className="pb-4 text-center font-semibold">Surface Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="py-4 text-sm font-medium">{row.feature}</td>
                      {row.tablets.map((hasFeature, i) => (
                        <td key={i} className="py-4 text-center">
                          {hasFeature ? (
                            <Check className="mx-auto h-5 w-5 text-accent" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-muted-foreground" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <Button className="w-full">Start Custom Comparison</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
