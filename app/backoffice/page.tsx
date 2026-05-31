import Link from "next/link";
import { BarChart3, Clock, CreditCard, ShieldCheck, Users } from "lucide-react";
import { carWashes, getPrimaryCarwash, platformStats } from "@/data/carwashes";

export default function BackofficePage() {
  const primary = getPrimaryCarwash();
  const totalQueue = carWashes.reduce((sum, carwash) => sum + carwash.currentQueue, 0);

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-700">
              WashMeNow+ Backoffice Demo
            </p>
            <h1 className="mt-2 text-3xl font-black text-slate-950">Partner & Listing Operations</h1>
            <p className="mt-2 max-w-3xl text-slate-600">
              Manage primary partner activity, discovery listings, queue visibility, booking requests, payments and future subscriptions.
            </p>
          </div>
          <Link
            href="/"
            className="rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-black text-white"
          >
            View public platform
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          <Metric icon={<ShieldCheck />} title="Primary Partner" value={primary.name} />
          <Metric icon={<BarChart3 />} title="Demo Listings" value={String(platformStats.totalListings)} />
          <Metric icon={<Clock />} title="Total Queue" value={`${totalQueue} cars`} />
          <Metric icon={<CreditCard />} title="Payments" value="Cash / POS first" />
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Carwash Listing Overview</h2>
            <div className="mt-5 overflow-hidden rounded-3xl border">
              {carWashes.map((carwash) => (
                <div
                  key={carwash.slug}
                  className="grid gap-4 border-b p-4 last:border-b-0 md:grid-cols-[1.2fr_0.6fr_0.6fr_0.8fr]"
                >
                  <div>
                    <p className="font-black text-slate-950">{carwash.name}</p>
                    <p className="text-sm text-slate-500">{carwash.address}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Status</p>
                    <p className="font-bold">{carwash.status}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Queue</p>
                    <p className="font-bold">{carwash.currentQueue} cars</p>
                  </div>
                  <Link
                    href={`/carwashes/${carwash.slug}`}
                    className="rounded-xl border px-4 py-2 text-center text-sm font-bold hover:border-cyan-400"
                  >
                    View profile
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-sm">
              <h2 className="text-xl font-black">Primary Partner Controls</h2>
              <p className="mt-2 text-sm text-slate-300">{primary.name}</p>
              <div className="mt-5 grid gap-3">
                <button className="rounded-xl bg-white px-4 py-3 font-black text-slate-950">
                  Check In Vehicle
                </button>
                <button className="rounded-xl bg-cyan-400 px-4 py-3 font-black text-slate-950">
                  Mark In Progress
                </button>
                <button className="rounded-xl border border-white/20 px-4 py-3 font-bold">
                  Mark Completed
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Demo only: these actions will connect to Supabase realtime queue updates.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-cyan-700">
                <Users className="h-5 w-5" />
                <h2 className="font-black">Privacy-safe washer aliases</h2>
              </div>
              <div className="mt-4 space-y-3">
                {primary.washers.map((washer) => (
                  <div key={washer.alias} className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-black">{washer.alias}</p>
                    <p className="text-sm text-slate-600">{washer.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function Metric({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="mb-4 text-cyan-700">{icon}</div>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
    </div>
  );
}
