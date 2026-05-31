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
