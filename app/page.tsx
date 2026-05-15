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
  Menu,
  X,
  Sparkles,
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-foreground font-semibold tracking-tight text-lg hover:text-accent transition-colors duration-300">
          Link Design
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground transition-all duration-300 text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center justify-center h-11 px-5 btn-gradient text-white rounded-lg text-sm font-medium shadow-glow-subtle"
        >
          Start a project
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
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
        <div className="md:hidden glass border-t border-border px-6 py-4 shadow-elevated">
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
              className="flex items-center justify-center h-11 px-5 btn-gradient text-white rounded-lg text-sm font-medium mt-2 shadow-glow-subtle"
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
    <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 px-6 hero-gradient noise-overlay overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-32 right-[10%] w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-[#a371f7]/5 blur-3xl animate-float animation-delay-300" />
      
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted">Design on demand</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-[-0.03em] leading-[1.05] text-balance animate-fade-in-up animation-delay-100">
          <span className="gradient-text">Design,</span>{" "}
          <span className="text-foreground">delivered.</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
          A design partner for marketing teams that move fast. Banners, social,
          print, HTML5. Usually shipped in <span className="text-foreground-secondary font-medium">48 hours</span>.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up animation-delay-300">
          <a
            href="#contact"
            className="group flex items-center justify-center h-12 px-6 btn-gradient text-white rounded-lg text-sm font-medium shadow-glow"
          >
            Start a project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#pricing"
            className="flex items-center gap-2 text-muted hover:text-foreground transition-all duration-300 text-sm font-medium group"
          >
            See pricing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <p className="mt-12 text-sm text-muted animate-fade-in-up animation-delay-400">
          Trusted by <span className="text-foreground-secondary">Renault</span>, <span className="text-foreground-secondary">Dacia</span>, <span className="text-foreground-secondary">Delfi</span>
        </p>
      </div>
    </section>
  );
}

// Logo Strip
function LogoStrip() {
  const logos = ["Renault", "Dacia", "Delfi", "Postimees", "Apollo", "ERR"];

  return (
    <section className="py-16 px-6 border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-xs uppercase tracking-wider text-muted mb-8 text-center">
          Working with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <span
              key={logo}
              className="text-muted/40 font-semibold text-lg tracking-tight hover:text-muted transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
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
    <section className="py-32 md:py-40 px-6 section-gradient noise-overlay relative">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground leading-snug text-balance">
              Need a banner by tomorrow. Five sizes.{" "}
              <span className="text-muted">No source files.</span>{" "}
              Sound familiar?
            </p>
          </div>
          <div className="flex items-center">
            <div className="p-6 rounded-xl glass border border-border shadow-elevated hover-lift">
              <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
                Brief in. Design out. Usually within{" "}
                <span className="gradient-text font-semibold">48 hours</span>. No long onboarding,
                no missing files, no chase.
              </p>
            </div>
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
    <section id="how-it-works" className="py-32 md:py-40 px-6 section-gradient-alt relative noise-overlay">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-16">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="group p-6 rounded-xl border border-border bg-background-secondary/50 card-interactive"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="inline-block text-sm text-accent font-mono bg-accent/10 px-3 py-1 rounded-full">{step.number}</span>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3 group-hover:text-accent transition-colors duration-300">
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
    <section className="py-32 md:py-40 px-6 section-gradient noise-overlay relative">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-16">
          What we do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group p-6 rounded-xl border border-border bg-background/50 card-interactive"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
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
    <section id="pricing" className="py-32 md:py-40 px-6 section-gradient-alt noise-overlay relative">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-16">
          Pricing
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-6 rounded-xl transition-all duration-300 hover-lift ${
                tier.highlighted
                  ? "card-highlighted shadow-glow"
                  : "border border-border bg-background-secondary/50 hover:border-accent/50 hover:shadow-elevated"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 bg-gradient-to-r from-accent to-[#a371f7] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-glow-subtle">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
              <div className="mt-4 mb-6">
                <span className={`text-4xl font-semibold tracking-tight ${tier.highlighted ? 'gradient-text' : 'text-foreground'}`}>
                  {tier.price} €
                </span>
                <span className="text-muted ml-2 text-sm">{tier.unit}</span>
              </div>
              <div className="h-px bg-border mb-6" />
              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`flex items-center justify-center h-11 rounded-lg text-sm font-medium transition-all duration-300 ${
                  tier.highlighted
                    ? "btn-gradient text-white shadow-glow-subtle"
                    : "border border-border text-foreground hover:border-accent hover:text-accent hover:bg-accent/5"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted text-center">
          All plans include 1 round of revisions. Need something custom?{" "}
          <a href="#contact" className="text-accent hover:underline transition-colors">
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
    <section className="pb-32 md:pb-40 px-6 section-gradient-alt relative">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 text-muted hover:text-accent transition-all duration-300 text-sm"
        >
          See full comparison
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-background-secondary/50 shadow-elevated">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                    Pay-as-you-go
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                    Lite
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-accent">
                    Core
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.label} className={`border-b border-border/50 hover:bg-accent/5 transition-colors ${index === rows.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="py-4 px-6 text-sm text-muted">{row.label}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className={`py-4 px-4 text-sm ${i === 2 ? 'text-accent' : 'text-foreground-secondary'}`}>
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
    <section id="work" className="py-32 md:py-40 px-6 section-gradient noise-overlay relative">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-16">
          Selected work
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] bg-background-secondary rounded-xl overflow-hidden border border-border card-interactive"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-foreground font-semibold">{project.title}</h3>
                <p className="text-muted text-sm mt-1">
                  {project.description}
                </p>
              </div>
              
              {/* Placeholder grid pattern */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-16 h-16 border-2 border-dashed border-muted rounded-lg" />
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
    <section className="py-32 md:py-40 px-6 section-gradient-alt noise-overlay relative">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
          <div className="aspect-square bg-background-secondary rounded-xl border border-border shadow-elevated overflow-hidden relative group">
            {/* Placeholder with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-[#a371f7]/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-muted/30" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-6">
              {"Hi, I'm"} <span className="gradient-text">Deniss.</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-xl">
              I run Link Design from Tallinn. For <span className="text-foreground-secondary font-medium">7+ years</span> I&apos;ve been making
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
    <section id="faq" className="py-32 md:py-40 px-6 section-gradient noise-overlay relative">
      <div className="mx-auto max-w-[800px] relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-16">
          FAQ
        </h2>
        <div className="space-y-0 rounded-xl border border-border bg-background-secondary/50 shadow-elevated overflow-hidden">
          {questions.map((item, index) => (
            <div key={index} className={`${index !== questions.length - 1 ? 'border-b border-border/50' : ''}`}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 px-6 text-left hover:bg-accent/5 transition-colors duration-300"
              >
                <span className="text-foreground font-medium pr-8">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-muted leading-relaxed">{item.answer}</p>
                </div>
              </div>
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
    <section id="contact" className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-[#a371f7]/10" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#a371f7]/10 blur-3xl animate-float animation-delay-300" />
      
      <div className="mx-auto max-w-[1200px] text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] mb-4">
          <span className="gradient-text">Got a deadline?</span>
        </h2>
        <p className="text-xl text-muted mb-10">{"Let's start now."}</p>
        <a
          href="mailto:hello@linkdesign.studio"
          className="group inline-flex items-center justify-center h-14 px-8 btn-gradient text-white rounded-xl text-base font-semibold shadow-glow animate-pulse-glow"
        >
          Start a project
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-foreground font-semibold">Link Design</span>
            <span className="text-muted ml-2">Tallinn, Estonia</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@linkdesign.studio"
              className="text-muted hover:text-accent transition-colors duration-300 text-sm"
            >
              hello@linkdesign.studio
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
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
