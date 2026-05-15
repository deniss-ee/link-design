"use client";

import { useState, useEffect } from "react";
import {
  Monitor,
  Share2,
  Mail,
  Printer,
  Layers,
  FileQuestion,
  ChevronDown,
  ArrowRight,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#work", label: "Work" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-foreground font-medium tracking-tight text-lg">
          Link Design
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center justify-center h-11 px-5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          Start a project
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground transition-colors text-sm py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center justify-center h-11 px-5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="pt-40 pb-32 md:pt-48 md:pb-40 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-medium tracking-[-0.02em] text-foreground leading-[1.05] text-balance">
          Design, delivered.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
          A design partner for marketing teams that move fast. Banners, social,
          print, HTML5. Usually shipped in 48 hours.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#contact"
            className="flex items-center justify-center h-12 px-6 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Start a project
          </a>
          <a
            href="#pricing"
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm font-medium"
          >
            See pricing
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="mt-12 text-sm text-muted">
          Trusted by Renault, Dacia, Delfi
        </p>
      </div>
    </section>
  );
}

// Logo Strip
function LogoStrip() {
  const logos = ["Renault", "Dacia", "Delfi", "Postimees", "Apollo", "ERR"];

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-xs uppercase tracking-wider text-muted mb-8 text-center">
          Working with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-muted/50 font-medium text-lg tracking-tight"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Problem/Promise Section
function ProblemPromise() {
  return (
    <section className="py-32 md:py-40 px-6 bg-section-bg">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-foreground leading-snug text-balance">
              Need a banner by tomorrow. Five sizes. No source files. Sound
              familiar?
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Brief in. Design out. Usually within 48 hours. No long onboarding,
              no missing files, no chase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Brief it.",
      description: "Fill the form. Takes 2 minutes.",
    },
    {
      number: "02",
      title: "We design.",
      description: "Usually 1-2 days. First draft in your inbox.",
    },
    {
      number: "03",
      title: "One round of revisions.",
      description: "Then it's yours. Source files included.",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 md:py-40 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-foreground mb-16">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm text-muted">{step.number}</span>
              <h3 className="text-xl font-medium text-foreground mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Web banners & HTML5",
      description: "Static and animated. Any platform.",
    },
    {
      icon: Share2,
      title: "Social media",
      description: "Posts, stories, ads. All formats.",
    },
    {
      icon: Mail,
      title: "Email & landing pages",
      description: "From wireframe to working file.",
    },
    {
      icon: Printer,
      title: "Print & OOH",
      description: "Flyers, billboards, packaging.",
    },
    {
      icon: Layers,
      title: "Brand adaptations",
      description: "One creative, all sizes. Fast.",
    },
    {
      icon: FileQuestion,
      title: "No source files? No problem.",
      description: "I rebuild what's missing.",
    },
  ];

  return (
    <section className="py-32 md:py-40 px-6 bg-section-bg">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-foreground mb-16">
          What we do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service) => (
            <div key={service.title}>
              <service.icon className="w-6 h-6 text-foreground mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const tiers = [
    {
      name: "Pay-as-you-go",
      price: "45",
      unit: "per hour",
      features: [
        "Minimum 1 hour per task",
        "Turnaround 3-4 working days",
        "Response within 1 working day",
        "4-hour deposit to start",
        "1 round of revisions included",
      ],
      cta: "Send a brief",
      highlighted: false,
    },
    {
      name: "Lite",
      price: "590",
      unit: "per month",
      features: [
        "Up to 12 hours/month",
        "1 active task at a time",
        "Turnaround 2-3 days",
        "Response within 4 hours",
        "Static design only",
      ],
      cta: "Get started",
      highlighted: false,
    },
    {
      name: "Core",
      price: "1190",
      unit: "per month",
      features: [
        "Up to 24 hours/month",
        "1 active task, unlimited backlog",
        "Turnaround 1-2 days",
        "Response within 2-4 hours",
        "HTML5, email, simple print included",
        "Telegram channel for quick questions",
      ],
      cta: "Book a call",
      highlighted: true,
    },
    {
      name: "Pro",
      price: "1990",
      unit: "per month",
      features: [
        "Up to 40 hours/month",
        "2 active tasks in parallel",
        "Turnaround 1-2 days",
        "Response within 2-4 hours",
        "Landing pages, decks, light branding",
      ],
      cta: "Book a call",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 md:py-40 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-foreground mb-16">
          Pricing
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-6 rounded-xl border ${
                tier.highlighted
                  ? "border-foreground"
                  : "border-border"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 bg-foreground text-background text-xs font-medium px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-medium text-foreground">{tier.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-medium text-foreground tracking-tight">
                  {tier.price} €
                </span>
                <span className="text-muted ml-2 text-sm">{tier.unit}</span>
              </div>
              <div className="h-px bg-border mb-6" />
              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`flex items-center justify-center h-11 rounded-lg text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "border border-border text-foreground hover:bg-section-bg"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted text-center">
          All plans include 1 round of revisions. Need something custom?{" "}
          <a href="#contact" className="text-foreground hover:underline">
            {"Let's talk."}
          </a>
        </p>
      </div>
    </section>
  );
}

// Comparison Table Section
function ComparisonTable() {
  const [isOpen, setIsOpen] = useState(false);

  const rows = [
    { label: "Hourly rate", values: ["45 €", "~49 €", "~50 €", "~50 €"] },
    { label: "Monthly hours", values: ["-", "12h", "24h", "40h"] },
    { label: "Active tasks", values: ["-", "1", "1", "2"] },
    { label: "Turnaround", values: ["3-4 days", "2-3 days", "1-2 days", "1-2 days"] },
    { label: "Response time", values: ["1 day", "4 hours", "2-4 hours", "2-4 hours"] },
    { label: "Minimum order", values: ["4h deposit", "-", "-", "-"] },
    { label: "Channel", values: ["Email", "Email", "Telegram", "Telegram"] },
    { label: "Payment", values: ["Invoice", "Monthly", "Monthly", "Monthly"] },
    { label: "Rush fee", values: ["50%", "-", "-", "-"] },
    { label: "Revisions", values: ["1 round", "1 round", "1 round", "1 round"] },
  ];

  return (
    <section className="pb-32 md:pb-40 px-6">
      <div className="mx-auto max-w-[1200px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm"
        >
          See full comparison
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-4 text-sm font-medium text-foreground">
                    Feature
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-foreground">
                    Pay-as-you-go
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-foreground">
                    Lite
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-foreground">
                    Core
                  </th>
                  <th className="text-left py-4 pl-4 text-sm font-medium text-foreground">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-4 pr-4 text-sm text-muted">{row.label}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className="py-4 px-4 text-sm text-foreground">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

// Work/Portfolio Section
function Work() {
  const projects = [
    { title: "Renault Campaign", description: "Display banners, 12 sizes" },
    { title: "Dacia Launch", description: "Social media kit" },
    { title: "Delfi Banners", description: "HTML5 animated ads" },
    { title: "Event Branding", description: "Print materials" },
    { title: "Email Templates", description: "Marketing automation" },
    { title: "Brand Adaptation", description: "Multi-format rollout" },
  ];

  return (
    <section id="work" className="py-32 md:py-40 px-6 bg-section-bg">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-foreground mb-16">
          Selected work
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] bg-border/50 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/80 transition-colors duration-200" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <h3 className="text-white font-medium">{project.title}</h3>
                <p className="text-white/70 text-sm mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
          <div className="aspect-square bg-border/50 rounded-xl" />
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-foreground mb-6">
              {"Hi, I'm Deniss."}
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-xl">
              I run Link Design from Tallinn. For 7+ years I&apos;ve been making
              design for newsrooms, car dealerships, and agencies that need things
              shipped yesterday. I work fast, I read brandbooks once, and I rebuild
              source files when they&apos;re missing. If your in-house team is
              drowning or your last freelancer disappeared, that&apos;s where I come
              in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "Why is the subscription more expensive per hour than pay-as-you-go?",
      answer:
        "The subscription plans offer faster turnaround, priority response times, and dedicated communication channels. You're paying for guaranteed capacity and speed, not just hours.",
    },
    {
      question: "What if I don't have source files?",
      answer:
        "No problem. I regularly rebuild designs from scratch when source files are missing. Just provide whatever you have - JPGs, PDFs, screenshots - and I'll recreate it as a fully editable file.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes. All subscriptions are month-to-month with no long-term commitment. Cancel anytime before your next billing cycle.",
    },
    {
      question: "Do you do brand identity from scratch?",
      answer:
        "My focus is on production design - taking existing brand guidelines and creating marketing materials. For full brand identity projects, I can recommend trusted partners.",
    },
    {
      question: "What about rush jobs and weekends?",
      answer:
        "Rush jobs are possible for pay-as-you-go clients at a 50% premium. Subscription clients already have priority turnaround built in. Weekend work is handled case by case.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Yes, happy to sign standard NDAs before starting work. Just send it along with your brief.",
    },
    {
      question: "What happens if I don't use all my hours?",
      answer:
        "Hours don't roll over between months. The subscription is designed for teams with consistent, ongoing design needs. If your needs are sporadic, pay-as-you-go might be a better fit.",
    },
  ];

  return (
    <section id="faq" className="py-32 md:py-40 px-6 bg-section-bg">
      <div className="mx-auto max-w-[800px]">
        <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-foreground mb-16">
          FAQ
        </h2>
        <div className="space-y-0">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-foreground font-medium pr-8">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-muted leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section id="contact" className="bg-accent py-32 md:py-40 px-6">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-white mb-4">
          Got a deadline?
        </h2>
        <p className="text-xl text-white/70 mb-10">{"Let's start now."}</p>
        <a
          href="mailto:hello@linkdesign.studio"
          className="inline-flex items-center justify-center h-12 px-8 bg-white text-accent rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Start a project
        </a>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-foreground font-medium">Link Design</span>
            <span className="text-muted ml-2">Tallinn, Estonia</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@linkdesign.studio"
              className="text-muted hover:text-foreground transition-colors text-sm"
            >
              hello@linkdesign.studio
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted">
          © 2026 Link Design OÜ
        </p>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <LogoStrip />
      <ProblemPromise />
      <HowItWorks />
      <Services />
      <Pricing />
      <ComparisonTable />
      <Work />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
