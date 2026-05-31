import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { pilotCarwash } from "@/data/seed";

export default function OutOfNaturePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-cyan-300">{pilotCarwash.status}</p>
          <h1 className="mt-2 text-4xl font-bold">{pilotCarwash.name}</h1>
          <p className="mt-3 max-w-2xl text-slate-300">{pilotCarwash.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${pilotCarwash.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950"
            >
              <Phone className="h-4 w-4" /> Call {pilotCarwash.phone}
            </a>
            <a
              href={pilotCarwash.mapsUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-semibold"
            >
              <MapPin className="h-4 w-4" /> Open Maps
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-semibold"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-2xl font-bold">Services & Pricing</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border">
            {pilotCarwash.services.map((service) => (
              <div key={service.category} className="border-b p-4 last:border-b-0">
                <h3 className="font-bold text-slate-900">{service.category}</h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {Object.entries(service.prices).map(([name, price]) => (
                    <div
                      key={name}
                      className="rounded-xl bg-slate-50 p-3 text-sm"
                    >
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
            <div className="flex items-center gap-2 text-cyan-700">
              <Clock className="h-5 w-5" />
              <h2 className="font-bold">Live Queue</h2>
            </div>
            <p className="mt-4 text-4xl font-bold">{pilotCarwash.currentQueue}</p>
            <p className="text-slate-500">cars currently waiting</p>
            <p className="mt-3 text-sm text-slate-600">
              Estimated wait: {pilotCarwash.estimatedWaitMinutes} minutes
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-cyan-700">
              <ShieldCheck className="h-5 w-5" />
              <h2 className="font-bold">Verified Info</h2>
            </div>
            <p className="mt-4 text-sm text-slate-600">{pilotCarwash.address}</p>
            <p className="mt-2 text-sm text-slate-600">Region: {pilotCarwash.region}</p>
            <p className="mt-2 text-sm text-slate-600">
              Payments: {pilotCarwash.paymentMethods.join(", ")}
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}