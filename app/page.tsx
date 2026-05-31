import Link from "next/link";
import { MapPin, ShieldCheck, Clock, CreditCard } from "lucide-react";
import { pilotCarwash } from "@/data/seed";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Namibia&apos;s verified car wash discovery platform
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Find. Book. Wash. Track. Pay.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            WashMeNow+ helps car owners discover verified car washes near them,
            check queues, compare prices, book services and review safely.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/carwashes/out-of-nature"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
            >
              View Pilot Carwash
            </Link>
            <Link
              href="/backoffice"
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold"
            >
              Backoffice Demo
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="rounded-2xl bg-slate-900 p-5">
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
              <Info icon={<ShieldCheck />} label="Trust" value="Verified pilot" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 text-cyan-300">{icon}</div>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}