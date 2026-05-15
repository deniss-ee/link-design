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
  ArrowUpRight,
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
    { href: "#how-it-works", label: "Process" },
    { href: "#pricing", label: "Pricing" },
    { href: "#work", label: "Work" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#" className="text-foreground font-medium tracking-tight text-xl">
          Link<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground transition-colors text-sm tracking-wide uppercase hover-slide pb-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 h-11 px-6 btn-primary rounded-full text-sm font-medium"
        >
          Start project
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground text-2xl font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 h-12 btn-primary rounded-full text-sm font-medium mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start project
              <ArrowUpRight className="w-4 h-4" />
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
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px] w-full">
        {/* Top row */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-sm tracking-widest uppercase text-muted">Design on demand</span>
        </div>

        {/* Main headline */}
        <h1 className="text-[clamp(3rem,12vw,10rem)] font-light leading-[0.9] tracking-[-0.04em] mb-12">
          Design<span className="text-accent">,</span>
          <br />
          delivered<span className="text-accent">.</span>
        </h1>

        {/* Subtext + CTA row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-lg font-light">
            A design partner for marketing teams that move fast. Banners, social, print, HTML5. 
            Usually shipped in <span className="highlight-box">48 hours</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-3 h-14 px-8 btn-primary rounded-full text-base font-medium"
            >
              Start a project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="flex items-center gap-2 h-14 px-8 btn-outline rounded-full text-base font-medium"
            >
              See pricing
            </a>
          </div>
        </div>

        {/* Trust line */}
        <div className="mt-24 pt-8 border-t border-border">
          <p className="text-sm text-muted">
            Trusted by <span className="text-foreground">Renault</span>, <span className="text-foreground">Dacia</span>, <span className="text-foreground">Delfi</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// Logo Strip
function LogoStrip() {
  const logos = ["Renault", "Dacia", "Delfi", "Postimees", "Apollo", "ERR"];

  return (
    <section className="py-16 border-y border-border bg-background-alt overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <span
            key={index}
            className="text-4xl md:text-5xl font-light text-muted/30 mx-12 tracking-tight"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}

// Chat Thread Section
function ChatThread() {
  const messages = [
    {
      sender: "client",
      text: "we dont have source files, we need 7 banners by tomorrow",
      time: "9:47 AM",
    },
    {
      sender: "studio",
      text: "send the brief, done by yesterday",
      time: "9:48 AM",
    },
    {
      sender: "client",
      text: "wait can you also resize for social? stories + feed",
      time: "9:52 AM",
    },
    {
      sender: "studio",
      text: "adding to the queue. you'll have everything by 6pm",
      time: "9:53 AM",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          {/* Left: Label */}
          <div>
            <span className="text-sm tracking-widest uppercase text-muted block mb-4">How it usually goes</span>
            <p className="text-3xl md:text-4xl font-light text-foreground leading-snug">
              Brief in. Design out.
              <br />
              Usually within <span className="text-accent">48 hours</span>.
            </p>
          </div>

          {/* Right: Chat bubbles */}
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "client" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] px-5 py-4 rounded-2xl transition-all ${
                    message.sender === "client"
                      ? "bg-background-alt border border-border rounded-bl-sm"
                      : "bg-foreground text-background rounded-br-sm"
                  }`}
                >
                  <p className="text-base leading-relaxed">{message.text}</p>
                  <span
                    className={`block text-xs mt-2 ${
                      message.sender === "client" ? "text-muted" : "text-background/60"
                    }`}
                  >
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
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
    <section id="how-it-works" className="py-24 md:py-32 px-6 lg:px-12 bg-foreground text-background">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-baseline justify-between mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">How it works</h2>
          <span className="hidden md:block text-sm text-background/40 tracking-widest uppercase">Process</span>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-background/10">
          {steps.map((step) => (
            <div key={step.number} className="bg-foreground p-8 md:p-12">
              <span className="number-large text-background/10">{step.number}</span>
              <h3 className="text-2xl md:text-3xl font-light mt-4 mb-4">{step.title}</h3>
              <p className="text-background/60 text-lg">{step.description}</p>
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
    <section className="py-24 md:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-baseline justify-between mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">What we do</h2>
          <span className="hidden md:block text-sm text-muted tracking-widest uppercase">Services</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="group card-editorial p-8 rounded-2xl">
              <div className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                <service.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
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
    <section id="pricing" className="py-24 md:py-32 px-6 lg:px-12 bg-background-alt">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-baseline justify-between mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">Pricing</h2>
          <span className="hidden md:block text-sm text-muted tracking-widest uppercase">Plans</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-2xl transition-all ${
                tier.highlighted
                  ? "bg-foreground text-background"
                  : "card-editorial"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-8 bg-accent text-background text-xs font-medium px-4 py-1.5 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className={`text-lg font-medium ${tier.highlighted ? "text-background" : "text-foreground"}`}>
                {tier.name}
              </h3>
              <div className="mt-6 mb-8">
                <span className={`text-5xl font-light tracking-tight ${tier.highlighted ? "text-background" : "text-foreground"}`}>
                  {tier.price}
                </span>
                <span className={`text-lg ml-1 ${tier.highlighted ? "text-background/60" : "text-muted"}`}>€</span>
                <span className={`block text-sm mt-1 ${tier.highlighted ? "text-background/60" : "text-muted"}`}>
                  {tier.unit}
                </span>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm flex items-start gap-3 ${
                      tier.highlighted ? "text-background/80" : "text-muted"
                    }`}
                  >
                    <span className={tier.highlighted ? "text-accent" : "text-accent"}>—</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`flex items-center justify-center h-12 rounded-full text-sm font-medium transition-all ${
                  tier.highlighted
                    ? "bg-background text-foreground hover:bg-accent hover:text-background"
                    : "btn-outline hover:bg-foreground hover:text-background"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-muted">
          All plans include 1 round of revisions. Need something custom?{" "}
          <a href="#contact" className="text-accent hover:underline">{"Let's talk."}</a>
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
    <section className="pb-24 md:pb-32 px-6 lg:px-12 bg-background-alt">
      <div className="mx-auto max-w-[1400px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm font-medium"
        >
          <span className="tracking-wide uppercase">See full comparison</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card-bg">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-5 px-6 text-sm font-medium text-foreground">Feature</th>
                  <th className="text-left py-5 px-5 text-sm font-medium text-foreground">Pay-as-you-go</th>
                  <th className="text-left py-5 px-5 text-sm font-medium text-foreground">Lite</th>
                  <th className="text-left py-5 px-5 text-sm font-medium text-accent">Core</th>
                  <th className="text-left py-5 px-6 text-sm font-medium text-foreground">Pro</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border/50 hover:bg-background-alt/50 transition-colors ${
                      index === rows.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="py-4 px-6 text-sm text-muted">{row.label}</td>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className={`py-4 px-5 text-sm ${i === 2 ? "text-accent font-medium" : "text-foreground-secondary"}`}
                      >
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
    <section id="work" className="py-24 md:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-baseline justify-between mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">Selected work</h2>
          <span className="hidden md:block text-sm text-muted tracking-widest uppercase">Portfolio</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] bg-background-alt rounded-2xl overflow-hidden border border-border hover:border-foreground transition-all cursor-pointer"
            >
              {/* Grid pattern placeholder */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{
                  backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-background p-6">
                <h3 className="text-xl font-medium text-center">{project.title}</h3>
                <p className="text-background/60 text-sm mt-2">{project.description}</p>
                <ArrowUpRight className="w-5 h-5 mt-4 opacity-60" />
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
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-background-alt">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Photo placeholder */}
          <div className="aspect-[3/4] bg-card-bg rounded-2xl border border-border overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-border" />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:pt-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-8 leading-tight">
              Hi, I&apos;m <span className="text-accent">Deniss</span>.
            </h2>
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed font-light max-w-2xl">
              I run Link Design from Tallinn. For <span className="highlight-box">7+ years</span> I&apos;ve been making
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
    <section id="faq" className="py-24 md:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
          Frequently asked
        </h2>

        <div className="space-y-0">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-foreground text-lg font-light pr-8 group-hover:text-accent transition-colors">
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:border-accent group-hover:text-accent transition-colors ${openIndex === index ? 'bg-accent border-accent text-background' : ''}`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted leading-relaxed pr-16">{item.answer}</p>
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
    <section id="contact" className="py-32 md:py-48 px-6 lg:px-12 bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] text-center">
        <span className="text-sm tracking-widest uppercase text-background/40 block mb-8">Ready to start?</span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
          Got a deadline<span className="text-accent">?</span>
        </h2>
        <p className="text-xl text-background/60 mb-12">{"Let's start now."}</p>
        <a
          href="mailto:hello@linkdesign.studio"
          className="group inline-flex items-center gap-3 h-16 px-10 bg-background text-foreground rounded-full text-lg font-medium hover:bg-accent hover:text-background transition-colors"
        >
          Start a project
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-foreground font-medium text-lg">Link<span className="text-accent">.</span></span>
            <span className="text-muted text-sm">Tallinn, Estonia</span>
          </div>
          <div className="flex items-center gap-8">
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted">© 2026 Link Design OÜ</p>
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
      <ChatThread />
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
