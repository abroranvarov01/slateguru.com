import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  const sections = [
    {
      title: "Reviews",
      links: ["iPad Reviews", "Android Tablets", "Windows Tablets", "Budget Tablets"],
    },
    {
      title: "Resources",
      links: ["Buying Guides", "Comparisons", "News", "Glossary"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Contact", "Advertise"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"],
    },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="font-bold text-primary">SG</span>
              </div>
              <span className="text-2xl font-bold">SlateGuru</span>
            </div>
            <p className="mb-6 max-w-xs leading-relaxed text-primary-foreground/80">
              Your trusted source for honest, in-depth tablet reviews and expert recommendations since 2015.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 SlateGuru. All rights reserved. Empowering tablet buyers worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
