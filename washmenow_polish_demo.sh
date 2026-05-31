#!/usr/bin/env bash
set -euo pipefail

mkdir -p app/carwashes/out-of-nature app/backoffice app/booking data

cat > data/seed.ts <<'EOF'
export const pilotCarwash = {
  id: "out-of-nature-carwash",
  name: "Out of Nature Carwash",
  tagline: "Verified pilot carwash in Windhoek — clean cars, fresh shine, local service.",
  status: "Verified Pilot",
  address: "Erf 2255 Stockholm Street, Windhoek",
  phone: "081 336 9016",
  mapsUrl: "https://maps.app.goo.gl/Bj4SVA4sEc9PSLW79",
  city: "Windhoek",
  region: "Khomas",
  operatingHours: "Open today • Confirm with owner",
  currentQueue: 3,
  availableBays: 1,
  estimatedWaitMinutes: 35,
  lastQueueUpdated: "Updated 7 minutes ago",
  pilotOffer: "2-month free WashMeNow+ pilot for verified carwash partners.",
  paymentMethods: ["Cash", "POS", "Digital payments coming soon"],
  highlights: [
    "Verified pilot profile",
    "Live queue visibility",
    "Booking request demo",
    "POS and payment tracking roadmap",
  ],
  gallery: [
    { title: "Fresh front shine", caption: "Demo image for profile hero and promotion.", src: "/out-of-nature/carwash-hero.webp" },
    { title: "On-site wash experience", caption: "Shows the carwash environment and service in progress.", src: "/out-of-nature/carwash-live-wash.webp" },
    { title: "Side profile finish", caption: "Clean exterior result for customer gallery previews.", src: "/out-of-nature/carwash-side.webp" },
    { title: "Wheel detail", caption: "Close-up detail shot for premium shine positioning.", src: "/out-of-nature/carwash-wheel-detail.webp" },
    { title: "Service price board", caption: "Pilot service pricing captured from the carwash board.", src: "/out-of-nature/service-price-board.webp" },
  ],
  sampleBookings: [
    { customer: "Guest • WMN-1042", service: "SUV Denim Wash", time: "Today, 15:30", status: "Pending confirmation", amount: "N$90" },
    { customer: "Guest • WMN-1043", service: "Sedan Outside + Inside", time: "Today, 16:00", status: "Confirmed", amount: "N$70" },
  ],
  services: [
    { category: "SUV", prices: { "Denim Wash": 90, Outside: 50, Inside: 40, Engine: 30, "Under Wash": 30 } },
    { category: "Single Cab", prices: { "Denim Wash": 80, Outside: 50, Inside: 30, Engine: 30, "Under Wash": 30 } },
    { category: "Double Cab", prices: { "Denim Wash": 90, Outside: 50, Inside: 40, Engine: 50, "Under Wash": 30 } },
    { category: "Sedan", prices: { "Denim Wash": 70, Outside: 40, Inside: 30, Engine: 30, "Under Wash": 30 } },
    { category: "Mini Truck", prices: { "Denim Wash": 100, Outside: 60, Inside: 30, Engine: 30, "Under Wash": 30 } },
    { category: "Extras", prices: { Mats: 150, "Car Seats": 350 } },
  ],
};
EOF

cat > app/page.tsx <<'EOF'
import Link from "next/link";
import { CalendarCheck, Clock, CreditCard, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { pilotCarwash } from "@/data/seed";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Namibia&apos;s verified car wash discovery platform
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Find. Book. Wash. Track. Pay.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            WashMeNow+ helps car owners discover verified car washes near them,
            check queues, compare prices, book services and review safely.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/carwashes/out-of-nature" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">
              View Pilot Carwash
            </Link>
            <Link href="/booking" className="rounded-xl border border-white/20 px-5 py-3 font-semibold">
              Request Booking
            </Link>
            <Link href="/backoffice" className="rounded-xl border border-white/20 px-5 py-3 font-semibold">
              Backoffice Demo
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
            <strong>Owner pilot offer:</strong> {pilotCarwash.pilotOffer}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${pilotCarwash.gallery[0].src})` }} />
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-cyan-300">{pilotCarwash.status}</p>
                  <h2 className="mt-1 text-2xl font-bold">{pilotCarwash.name}</h2>
                  <p className="mt-2 text-slate-300">{pilotCarwash.address}</p>
                </div>
                <ShieldCheck className="h-8 w-8 text-cyan-300" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Info icon={<MapPin />} label="Location" value="Windhoek" />
                <Info icon={<Clock />} label="Queue" value={`${pilotCarwash.currentQueue} cars`} />
                <Info icon={<CreditCard />} label="Payments" value="Cash / POS" />
                <Info icon={<CalendarCheck />} label="Pilot" value="2 months free" />
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-400"><Sparkles className="h-4 w-4 text-cyan-300" /> Privacy-first reviews with number plate blur coming next.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 text-cyan-300">{icon}</div>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
EOF

cat > app/carwashes/out-of-nature/page.tsx <<'EOF'
import Link from "next/link";
import { CalendarCheck, Camera, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { pilotCarwash } from "@/data/seed";

export default function OutOfNaturePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-cyan-300">{pilotCarwash.status}</p>
            <h1 className="mt-2 text-4xl font-bold">{pilotCarwash.name}</h1>
            <p className="mt-3 max-w-2xl text-slate-300">{pilotCarwash.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${pilotCarwash.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950">
                <Phone className="h-4 w-4" /> Call {pilotCarwash.phone}
              </a>
              <a href={pilotCarwash.mapsUrl} target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-semibold">
                <MapPin className="h-4 w-4" /> Open Maps
              </a>
              <Link href="/booking" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-semibold">
                <CalendarCheck className="h-4 w-4" /> Book Service
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${pilotCarwash.gallery[1].src})` }} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-2xl font-bold">Services & Pricing</h2>
          <p className="mt-2 text-sm text-slate-500">Pricing captured from the pilot board. Final prices should be confirmed with the owner before public launch.</p>
          <div className="mt-6 overflow-hidden rounded-2xl border">
            {pilotCarwash.services.map((service) => (
              <div key={service.category} className="border-b p-4 last:border-b-0">
                <h3 className="font-bold text-slate-900">{service.category}</h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {Object.entries(service.prices).map(([name, price]) => (
                    <div key={name} className="rounded-xl bg-slate-50 p-3 text-sm">
                      <p className="text-slate-500">{name}</p>
                      <p className="font-bold">N${price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-cyan-700"><Clock className="h-5 w-5" /><h2 className="font-bold">Live Queue</h2></div>
            <p className="mt-4 text-4xl font-bold">{pilotCarwash.currentQueue}</p>
            <p className="text-slate-500">cars currently waiting</p>
            <p className="mt-3 text-sm text-slate-600">Estimated wait: {pilotCarwash.estimatedWaitMinutes} minutes</p>
            <p className="mt-1 text-xs text-slate-400">{pilotCarwash.lastQueueUpdated}</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-cyan-700"><ShieldCheck className="h-5 w-5" /><h2 className="font-bold">Verified Info</h2></div>
            <p className="mt-4 text-sm text-slate-600">{pilotCarwash.address}</p>
            <p className="mt-2 text-sm text-slate-600">Region: {pilotCarwash.region}</p>
            <p className="mt-2 text-sm text-slate-600">Payments: {pilotCarwash.paymentMethods.join(", ")}</p>
          </div>

          <div className="rounded-3xl bg-cyan-50 p-6 shadow-sm">
            <h2 className="font-bold text-cyan-950">Owner Pilot</h2>
            <p className="mt-2 text-sm text-cyan-900">{pilotCarwash.pilotOffer}</p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="mb-5 flex items-center gap-2"><Camera className="h-5 w-5 text-cyan-700" /><h2 className="text-2xl font-bold">Pilot Media Gallery</h2></div>
        <div className="grid gap-4 md:grid-cols-3">
          {pilotCarwash.gallery.slice(0, 5).map((item) => (
            <div key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-52 bg-cover bg-center" style={{ backgroundImage: `url(${item.src})` }} />
              <div className="p-4"><h3 className="font-bold">{item.title}</h3><p className="mt-1 text-sm text-slate-500">{item.caption}</p></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
EOF

cat > app/booking/page.tsx <<'EOF'
import Link from "next/link";
import { ArrowLeft, CalendarCheck, Phone } from "lucide-react";
import { pilotCarwash } from "@/data/seed";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/carwashes/out-of-nature" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"><ArrowLeft className="h-4 w-4" /> Back to carwash profile</Link>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-cyan-700"><CalendarCheck className="h-6 w-6" /><p className="font-semibold">Booking Request Demo</p></div>
          <h1 className="mt-3 text-3xl font-bold">Book {pilotCarwash.name}</h1>
          <p className="mt-2 text-slate-600">This demo form shows what customers will submit. In the next sprint, we will connect it to Supabase.</p>

          <form className="mt-8 grid gap-4">
            <label className="grid gap-2 text-sm font-medium">Name or nickname<input className="rounded-xl border px-4 py-3" placeholder="e.g. Heinrich / Guest WMN" /></label>
            <label className="grid gap-2 text-sm font-medium">Phone number<input className="rounded-xl border px-4 py-3" placeholder="081 000 0000" /></label>
            <label className="grid gap-2 text-sm font-medium">Service<select className="rounded-xl border px-4 py-3"><option>SUV Denim Wash - N$90</option><option>Sedan Denim Wash - N$70</option><option>Double Cab Denim Wash - N$90</option><option>Mats - N$150</option><option>Car Seats - N$350</option></select></label>
            <label className="grid gap-2 text-sm font-medium">Preferred time<input type="datetime-local" className="rounded-xl border px-4 py-3" /></label>
            <label className="grid gap-2 text-sm font-medium">Notes<textarea className="min-h-28 rounded-xl border px-4 py-3" placeholder="Any special instruction?" /></label>
            <button type="button" className="rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white">Submit Demo Booking</button>
          </form>

          <div className="mt-6 rounded-2xl bg-cyan-50 p-4 text-sm text-cyan-900">
            Prefer direct contact? Call <a className="font-bold underline" href={`tel:${pilotCarwash.phone}`}>{pilotCarwash.phone}</a>.
          </div>
        </div>
      </div>
    </main>
  );
}
EOF

cat > app/backoffice/page.tsx <<'EOF'
import Link from "next/link";
import { CalendarCheck, Clock, CreditCard, Inbox, MapPin } from "lucide-react";
import { pilotCarwash } from "@/data/seed";

export default function BackofficePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-cyan-700">Owner Dashboard Demo</p>
            <h1 className="text-3xl font-bold">{pilotCarwash.name}</h1>
            <p className="mt-2 text-slate-600">Manage queue, bookings, payments, profile updates and the 2-month trial.</p>
          </div>
          <Link href="/carwashes/out-of-nature" className="rounded-xl border bg-white px-4 py-3 text-sm font-semibold">View public profile</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Metric icon={<Clock />} title="Cars in Queue" value={String(pilotCarwash.currentQueue)} note={pilotCarwash.lastQueueUpdated} />
          <Metric icon={<MapPin />} title="Available Bays" value={String(pilotCarwash.availableBays)} note="Pilot capacity" />
          <Metric icon={<CalendarCheck />} title="Estimated Wait" value={`${pilotCarwash.estimatedWaitMinutes} min`} note="Customer-facing" />
          <Metric icon={<CreditCard />} title="Today Sales" value="N$160" note="Demo POS total" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Quick Queue Controls</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-xl bg-slate-900 px-4 py-3 text-white">Check In Vehicle</button>
              <button className="rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-white">Mark In Progress</button>
              <button className="rounded-xl border px-4 py-3">Mark Completed</button>
            </div>
            <p className="mt-4 text-sm text-slate-500">Demo only: next step is connecting these actions to Supabase realtime queue updates.</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2"><Inbox className="h-5 w-5 text-cyan-700" /><h2 className="text-xl font-bold">Booking Requests</h2></div>
            <div className="mt-5 space-y-3">
              {pilotCarwash.sampleBookings.map((booking) => (
                <div key={booking.customer} className="rounded-2xl border p-4">
                  <div className="flex items-start justify-between gap-4"><div><p className="font-semibold">{booking.service}</p><p className="text-sm text-slate-500">{booking.customer} • {booking.time}</p></div><p className="font-bold">{booking.amount}</p></div>
                  <p className="mt-2 text-sm text-cyan-700">{booking.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-xl font-bold">Pilot Conversion Message</h2>
          <p className="mt-2 text-slate-300">{pilotCarwash.pilotOffer} After the trial, owners can choose a quarterly, 6-month or annual subscription plan.</p>
        </div>
      </div>
    </main>
  );
}

function Metric({ icon, title, value, note }: { icon: React.ReactNode; title: string; value: string; note: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-3 text-cyan-700">{icon}</div>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-4xl font-bold text-slate-900">{value}</p>
      <p className="mt-2 text-xs text-slate-400">{note}</p>
    </div>
  );
}
EOF

echo "Polish files written. Now copy the image assets into public/out-of-nature, then run npm run build."
