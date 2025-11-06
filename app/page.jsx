"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Mail, Sparkles, LineChart, Users, Waypoints, BadgeCheck } from "lucide-react";

const features = [
  { title: "AI Gevinstkartlegging", duration: "1–2 uker", description: "Kartlegging av prosesser og arbeidsflyt for å finne én konkret oppgave der AI kan gi størst nytte.", icon: Waypoints },
  { title: "AI Mini-Pilot", duration: "6–8 uker", description: "Lavrisiko test på én oppgave med målt effekt (tid spart, bedre kvalitet, enklere flyt).", icon: LineChart },
  { title: "Adopsjon & Skalering", duration: "4–12 uker", description: "Opplæring, rutiner og innføring av AI i teamet – slik at det faktisk tas i bruk og skaleres.", icon: Users },
];

const valuePoints = [
  "Vi gjør AI praktisk, menneskelig og målbart.",
  "Små, trygge steg fremfor store teknologiprosjekter.",
  "Fokus på adopsjon, læring og dokumentert gevinst.",
];

const differentiators = [
  { left: "AI føles komplisert og risikabelt", right: "Vi gjør det trygt, konkret og lavterskel" },
  { left: "Mangel på tid og eierskap", right: "Vi leder prosess og trener folk i hverdagen" },
  { left: "Manglende gevinstrealisering", right: "Vi måler og dokumenterer effekt" },
  { left: "Overfokusering på teknologi", right: "Vi fokuserer på mennesker og arbeidsflyt" },
];

const Nav = () => (
  <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-2 group" aria-label="realiser.ai – hjem">
        <div className="w-8 h-8 rounded-lg bg-[#0E8074]" />
        <span className="font-semibold tracking-tight text-slate-900">realiser<span className="text-[#0E8074]">.ai</span></span>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Hovedmeny">
        <a href="#value" className="hover:text-[#0E8074]">Hvorfor oss</a>
        <a href="#services" className="hover:text-[#0E8074]">Tjenester</a>
        <a href="#process" className="hover:text-[#0E8074]">Slik jobber vi</a>
        <a href="#contact" className="hover:text-[#0E8074]">Kontakt</a>
      </nav>
      <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-[#0E8074] text-white hover:opacity-90">
        Start i liten skala <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#F5F7F9]" />
    <div className="max-w-6xl mx-auto px-4 py-24 sm:py-28">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
          <Sparkles className="w-3.5 h-3.5" />
          Ikke hype – resultater
        </div>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          Realiser verdien av AI – gjennom små, trygge og målbare steg
        </h1>
        <p className="mt-6 text-lg text-slate-700 max-w-2xl">
          Vi hjelper kundeservice-, drifts- og støttefunksjoner å ta i bruk AI i praksis. Fokus på mennesker, prosess og faktisk bruk – ikke plattformvalg.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-[#0E8074] text-white font-medium hover:opacity-90">
            Finn første gevinstområde <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 border border-slate-300 text-slate-900 bg-white font-medium hover:border-[#0E8074]">
            Se tjenestene
          </a>
        </div>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-slate-600">
          {valuePoints.map((v) => (
            <li key={v} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#0E8074]" />{v}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const Value = () => (
  <section id="value" className="py-16 sm:py-24 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Broen mellom AI og arbeidshverdagen</h2>
          <p className="mt-4 text-slate-700">
            De fleste AI-aktører fokuserer på teknologi. Vi fokuserer på mennesker, prosess og faktisk gevinst. Der andre leverer løsninger, sikrer vi at de blir tatt i bruk.
          </p>
          <div className="mt-6 grid gap-4">
            {differentiators.map((d, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
                <div className="text-slate-600 text-sm">Behov i markedet</div>
                <div className="font-medium">{d.left}</div>
                <div className="mt-2 text-slate-600 text-sm">Vår løsning</div>
                <div className="font-medium text-slate-900">{d.right}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-[#F5F7F9] p-6">
          <h3 className="text-lg font-semibold text-slate-900">Målbarhet som standard</h3>
          <p className="mt-2 text-slate-700">Vi dokumenterer før/etter-effekt i alle prosjekter. Typiske gevinster:</p>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700">
            <li className="flex items-start gap-2"><BadgeCheck classNameName="w-4 h-4 mt-0.5 text-[#0E8074]"/>20–40% raskere saksbehandling</li>
            <li className="flex items-start gap-2"><BadgeCheck className="w-4 h-4 mt-0.5 text-[#0E8074]"/>Redusert feilrate og bedre kundetilfredshet</li>
            <li className="flex items-start gap-2"><BadgeCheck className="w-4 h-4 mt-0.5 text-[#0E8074]"/>Frigjort tid til kunde og kjerneoppgaver</li>
          </ul>
          <div className="mt-6 text-xs text-slate-500">*Eksempler – konkret måling settes i hvert prosjekt.</div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-16 sm:py-24 bg-[#0B2E3B]">
    <div className="max-w-6xl mx-auto px-4 text-white">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Tjenester</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {features.map(({ title, duration, description, icon: Icon }) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#0E8074]/90"><Icon className="w-5 h-5 text-white"/></div>
              <div className="text-sm uppercase tracking-wide text-white/80">{duration}</div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-white/80">{description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-[#0B2E3B] font-medium hover:opacity-90">
          Sett opp en prat <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-16 sm:py-24 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Slik jobber vi</h2>
      <ol className="mt-8 grid md:grid-cols-3 gap-6">
        {["Kartlegg & prioriter", "Test & lær", "Adopter & skaler"].map((step, i) => (
          <li key={step} className="relative rounded-3xl border border-slate-200 bg-white p-6">
            <div className="absolute -top-4 left-6 w-8 h-8 rounded-2xl bg-[#0E8074] text-white grid place-items-center font-semibold">{i+1}</div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{step}</h3>
            <p className="mt-2 text-slate-700">
              {i===0 && "Vi identifiserer konkrete oppgaver med høy nytte og lav risiko, og blir enige om ett fokusområde."}
              {i===1 && "Vi kjører en mini-pilot med tydelige måleparametre, dokumenterer effekt og justerer underveis."}
              {i===2 && "Vi trener teamet, etablerer rutiner og skalerer bruken der det gir mest verdi."}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const CTA = () => (
  <section id="contact" className="py-16 sm:py-24 bg-[#F5F7F9]">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Klar for første steg?</h2>
      <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
        Book en 30-min samtale for å finne ett konkret gevinstområde i deres hverdag – helt uten forpliktelser.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
        <a href="mailto:bm@realiser.ai?subject=Interesse%20for%20AI%20Gevinstkartlegging" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-[#0E8074] text-white font-medium"><Mail className="w-4 h-4"/>bm@realiser.ai</a>
        <a href="mailto:tim@realiser.ai?subject=Interesse%20for%20AI%20Mini-Pilot" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-slate-300 bg-white text-slate-900 font-medium"><Mail className="w-4 h-4"/>tim@realiser.ai</a>
      </div>
      <div className="mt-4 text-sm text-slate-600">Domeneforslag: <span className="font-medium">realiser.ai</span> (primært) eller <span className="font-medium">velg.ai</span> (alternativ)</div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-200">
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 items-start">
      <div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0E8074]" />
          <span className="font-semibold tracking-tight text-slate-900">realiser<span className="text-[#0E8074]">.ai</span></span>
        </div>
        <p className="mt-3 text-sm text-slate-600 max-w-sm">Vi hjelper virksomheter å realisere verdien av kunstig intelligens – gjennom små, målbare og menneskelige steg som faktisk tas i bruk.</p>
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">Kontakt</div>
        <ul className="mt-3 text-sm text-slate-700 space-y-1">
          <li className="flex items-center gap-2"><Mail className="w-4 h-4"/><a href="mailto:bm@realiser.ai" className="hover:text-[#0E8074]">bm@realiser.ai</a></li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4"/><a href="mailto:tim@realiser.ai" className="hover:text-[#0E8074]">tim@realiser.ai</a></li>
        </ul>
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">Mer</div>
        <ul className="mt-3 text-sm text-slate-700 space-y-1">
          <li>Enkel tekstlogo i svart eller blågrønn (#0E8074)</li>
          <li>Farger: hvit, lys grå, dyp blå, blågrønn</li>
          <li>© {new Date().getFullYear()} realiser.ai</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default function RealiserSite() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Nav />
      <main>
        <Hero />
        <Value />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
