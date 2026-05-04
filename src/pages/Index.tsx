import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles, Wand2, Zap, Globe, Music2, Image as ImageIcon, Check,
  ArrowRight, Play, Type, Film, ShieldCheck, Rocket, Star,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";

const APP_URL = "https://app.dextora.ai"; // <- replace with the white-label app URL

const reels = [
  { src: reel1, label: "Neon Tokyo dance" },
  { src: reel2, label: "Luxury product ad" },
  { src: reel3, label: "Cosmic surfer" },
  { src: reel4, label: "Food cinematic" },
];

const Index = () => {
  const [prompt, setPrompt] = useState("A golden hour drone shot over Mumbai skyline, cinematic, 9:16");
  const goToApp = () => window.open(APP_URL, "_blank", "noopener");

  // animated typing in hero phone
  const [typed, setTyped] = useState("");
  const phrases = useRef([
    "Astronaut surfing a galaxy wave...",
    "Perfume bottle, gold smoke, marble...",
    "Chef plating a dish, steam rising...",
    "Neon Tokyo street at night, dancer...",
  ]);
  useEffect(() => {
    let i = 0, j = 0, deleting = false;
    const id = setInterval(() => {
      const w = phrases.current[i];
      if (!deleting) {
        j++;
        setTyped(w.slice(0, j));
        if (j === w.length) { deleting = true; setTimeout(() => {}, 800); }
      } else {
        j--;
        setTyped(w.slice(0, j));
        if (j === 0) { deleting = false; i = (i + 1) % phrases.current.length; }
      }
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="container mx-auto mt-4 px-4">
          <nav className="glass rounded-2xl flex items-center justify-between px-5 py-3">
            <a href="#" className="flex items-center gap-2 font-serif text-2xl">
              <span className="size-7 rounded-lg bg-gradient-primary shadow-glow" />
              <span>Dextora</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#showcase" className="hover:text-foreground transition-colors">Showcase</a>
              <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </div>
            <Button onClick={goToApp} className="bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-xl shadow-glow">
              Get Started <ArrowRight className="ml-1 size-4" />
            </Button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-24">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 w-full h-[120%] object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/80 to-background" />

        <div className="container mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <Badge variant="outline" className="rounded-full border-primary/40 bg-primary/10 text-primary mb-6 px-4 py-1.5">
              <Sparkles className="size-3.5 mr-1.5" /> The new way to make video
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight pb-2">
              Reels that <span className="text-gradient italic inline-block pb-1">stop the scroll.</span>
              <br />
              Made from a <span className="italic">single prompt.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              Dextora turns your ideas into cinematic, ready-to-post short videos in under a minute.
              No camera. No crew. No editing. Just type — and post.
            </p>

            {/* prompt box */}
            <div className="mt-8 glass rounded-2xl p-2 flex items-center gap-2 max-w-xl shadow-card">
              <Wand2 className="size-5 text-primary ml-3 shrink-0" />
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your reel..."
                className="flex-1 bg-transparent outline-none text-sm md:text-base placeholder:text-muted-foreground py-3"
              />
              <Button onClick={goToApp} className="bg-gradient-primary text-primary-foreground rounded-xl animate-pulse-glow">
                Generate <ArrowRight className="ml-1 size-4" />
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="size-4 text-primary" /> Free credits on signup</span>
              <span className="flex items-center gap-1.5"><Check className="size-4 text-primary" /> Export 1080p / 4K</span>
              <span className="flex items-center gap-1.5"><Check className="size-4 text-primary" /> Commercial license</span>
            </div>
          </div>

          {/* Phone mock */}
          <div className="relative mx-auto w-full max-w-[360px] animate-float">
            <div className="absolute -inset-10 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-card p-3 shadow-glow">
              <div className="rounded-[2rem] overflow-hidden aspect-[9/16] relative">
                <img src={reel1} alt="AI generated reel preview" width={576} height={1024} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-medium text-white/90">Generating · 00:42</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-3 py-2 text-xs text-white/90 font-mono min-h-9">
                    <span className="text-primary-glow">prompt › </span>{typed}<span className="animate-pulse">▍</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 top-10 glass rounded-2xl p-3 shadow-card hidden sm:flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-primary grid place-items-center"><Music2 className="size-4 text-white" /></div>
              <div className="text-xs"><div className="font-medium">Auto-music</div><div className="text-muted-foreground">Trending · 124 BPM</div></div>
            </div>
            <div className="absolute -left-8 bottom-16 glass rounded-2xl p-3 shadow-card hidden sm:flex items-center gap-2">
              <div className="size-8 rounded-lg bg-accent/20 grid place-items-center"><Type className="size-4 text-accent" /></div>
              <div className="text-xs"><div className="font-medium">Auto-captions</div><div className="text-muted-foreground">42 languages</div></div>
            </div>
          </div>
        </div>

        {/* Logo strip */}
        <div className="container mx-auto px-4 mt-24">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Loved by creators & brands across India
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-70">
            {["Lumora", "Kavach", "Northwind", "Sundara", "Helios", "Ardent"].map((b) => (
              <div key={b} className="text-center font-serif text-xl text-muted-foreground">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE / MARQUEE */}
      <section id="showcase" className="py-24 relative">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
            From a sentence to a <span className="text-gradient italic">scene.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real reels generated by Dextora users. Different styles, vibes and verticals — all from a single prompt.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 marquee-track w-max">
            {[...reels, ...reels, ...reels].map((r, i) => (
              <div key={i} className="relative w-[260px] aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 shrink-0 group">
                <img src={r.src} alt={r.label} loading="lazy" width={576} height={1024} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs glass rounded-full px-3 py-1">{r.label}</span>
                  <div className="size-9 rounded-full bg-gradient-primary grid place-items-center"><Play className="size-4 text-white fill-white" /></div>
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <Badge variant="outline" className="rounded-full border-accent/40 bg-accent/10 text-accent mb-4 px-3">Features</Badge>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
              An entire studio, <span className="italic text-gradient">in one prompt box.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {[
              { icon: Wand2, title: "Prompt-to-Reel", desc: "Describe a scene in plain English or Hindi. Get a finished, vertical reel — actors, motion, music, captions, all in." },
              { icon: Film, title: "Cinematic models", desc: "Best-in-class generative video models, fine-tuned for short-form. 1080p by default, 4K on Pro." },
              { icon: Music2, title: "Auto music & SFX", desc: "Beat-matched trending tracks and atmospheric sound design picked automatically — or bring your own." },
              { icon: Type, title: "Auto captions", desc: "Animated subtitles in 42 languages including Hindi, Tamil, Telugu, Marathi, Bengali. Editable on the fly." },
              { icon: ImageIcon, title: "Image-to-video", desc: "Drop a product photo, brand asset or selfie. Dextora animates it into a high-end ad in seconds." },
              { icon: Globe, title: "Brand kits", desc: "Lock fonts, colors and logos so every reel ships on-brand. Perfect for agencies & D2C teams." },
              { icon: Zap, title: "Under 60 seconds", desc: "Most reels render in under a minute. Queue 10 at a time on Pro, no waiting in line." },
              { icon: ShieldCheck, title: "Commercial-safe", desc: "Every output ships with a commercial license. Use it on Instagram, YouTube, ads, anywhere." },
              { icon: Rocket, title: "Built for India", desc: "Pricing, languages, music libraries and aesthetics tuned for Indian creators and businesses." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="bg-card/60 border-white/5 p-6 rounded-2xl hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card">
                <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center mb-5 shadow-glow">
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="rounded-full border-primary/40 bg-primary/10 text-primary mb-4 px-3">How it works</Badge>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
              Three steps. <span className="text-gradient italic">One masterpiece.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Describe", d: "Type your idea in any language. Add a vibe, a reference image, or a brand kit." },
              { n: "02", t: "Generate", d: "Dextora composes the shots, motion, music and captions. Render in under a minute." },
              { n: "03", t: "Post", d: "Download in 9:16, 1:1 or 16:9 — or push directly to Instagram, YouTube, TikTok." },
            ].map((s) => (
              <div key={s.n} className="relative glass rounded-3xl p-8">
                <div className="font-serif text-7xl text-gradient leading-none">{s.n}</div>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="text-muted-foreground mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="rounded-full border-accent/40 bg-accent/10 text-accent mb-4 px-3">Pricing</Badge>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
              Simple credits. <span className="italic text-gradient">No surprises.</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              1 credit ≈ one 6-second reel. Credits never expire on paid plans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Starter", price: "$0", note: "Try it free", credits: "10 credits / month", cta: "Start free",
                features: ["720p exports", "Watermarked", "Personal use", "Email support"] },
              { name: "Creator", price: "$19", note: "per month", credits: "150 credits / month", highlight: true, cta: "Get Creator",
                features: ["1080p exports", "No watermark", "Commercial license", "Auto captions · 42 languages", "Brand kit (1)"] },
              { name: "Studio", price: "$49", note: "per month", credits: "500 credits / month", cta: "Get Studio",
                features: ["4K exports", "Image-to-video", "10 brand kits", "Priority queue", "API access (beta)"] },
            ].map((p) => (
              <Card key={p.name}
                className={`relative p-8 rounded-3xl border ${p.highlight ? "border-primary/60 bg-gradient-soft shadow-glow" : "border-white/10 bg-card/60"}`}>
                {p.highlight && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground border-0 rounded-full px-3">
                    Most popular
                  </Badge>
                )}
                <h3 className="font-serif text-2xl">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                  <span className="text-muted-foreground text-sm">{p.note}</span>
                </div>
                <p className="text-sm text-primary mt-2">{p.credits}</p>
                <Button onClick={goToApp}
                  className={`w-full mt-6 rounded-xl ${p.highlight ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                  {p.cta}
                </Button>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="size-4 text-primary mt-0.5 shrink-0" /> <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            Need an enterprise plan? <a href="mailto:hello@dextora.ai" className="text-primary hover:underline">Talk to us →</a>
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
              Creators are <span className="italic text-gradient">obsessed.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "I used to spend ₹40,000 per ad. Dextora gave me 30 reels in a weekend that actually converted.", n: "Ananya R.", r: "D2C founder, Bengaluru" },
              { q: "Insane quality. My agency replaced two motion designers with Dextora and our output 4x'd.", n: "Vikram S.", r: "Creative director, Mumbai" },
              { q: "I'm not a video person at all. I typed a sentence and got a reel that hit 1.2M views.", n: "Priya K.", r: "Lifestyle creator, Delhi" },
            ].map((t) => (
              <Card key={t.n} className="bg-card/60 border-white/5 p-7 rounded-2xl">
                <div className="flex gap-1 text-accent mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent" />)}
                </div>
                <p className="text-lg leading-relaxed">"{t.q}"</p>
                <div className="mt-5 text-sm">
                  <div className="font-medium">{t.n}</div>
                  <div className="text-muted-foreground">{t.r}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-center mb-12">
            Questions, <span className="italic text-gradient">answered.</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "How long does a reel take to generate?", a: "Most 6–15 second reels render in 30–90 seconds. Heavier 4K renders on Studio can take up to 3 minutes." },
              { q: "What is a credit?", a: "1 credit produces ~6 seconds of generated video at 1080p. A 12 second reel = 2 credits. Captions and music are free." },
              { q: "Can I use Dextora reels commercially?", a: "Yes — every reel on Creator and above ships with a full commercial license, including for paid ads." },
              { q: "Do you support Indian languages?", a: "Yes. Captions support 42 languages including Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada and Malayalam." },
              { q: "Can I cancel anytime?", a: "Yes. Cancel in one click. You keep your unused credits till the end of the billing cycle." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="glass rounded-2xl px-6 border-0">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center">
            <img src={heroBg} alt="" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="relative">
              <h2 className="font-serif text-5xl md:text-7xl tracking-tight">
                Your next viral reel <br />
                is <span className="italic text-gradient">one prompt away.</span>
              </h2>
              <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
                Join thousands of creators and brands using Dextora to ship cinematic short videos every single day.
              </p>
              <Button onClick={goToApp} size="lg" className="mt-8 bg-gradient-primary text-primary-foreground rounded-2xl h-14 px-8 text-base shadow-glow">
                Generate your first reel — free <ArrowRight className="ml-2 size-5" />
              </Button>
              <p className="text-xs text-muted-foreground mt-4">No credit card required · 10 free credits</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-serif text-xl text-foreground">
            <span className="size-6 rounded-md bg-gradient-primary" /> Dextora
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="mailto:hello@dextora.ai" className="hover:text-foreground">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} Dextora. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
