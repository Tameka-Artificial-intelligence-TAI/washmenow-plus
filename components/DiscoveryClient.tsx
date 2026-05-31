"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BadgeCheck,
  Car,
  Clock,
  Compass,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Users,
} from "lucide-react";
import { carWashes, getRecommendedCarwashes, platformStats } from "@/data/carwashes";

export default function DiscoveryClient() {
  const [query, setQuery] = useState("");

  const recommended = getRecommendedCarwashes(8);

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return carWashes;

    return carWashes.filter((carwash) => {
      const searchable = [
        carwash.name,
        carwash.address,
        carwash.city,
        carwash.region,
        carwash.description,
        carwash.partnerLabel,
        carwash.status,
        ...carwash.tags,
        ...carwash.services.flatMap((service) => [
          service.category,
          service.description,
          ...service.items.map((item) => `${item.name} ${item.price} ${item.note ?? ""}`),
        ]),
        ...carwash.menus.flatMap((menu) => [
          menu.category,
          menu.description,
          ...menu.items.map((item) => `${item.name} ${item.price} ${item.note ?? ""}`),
        ]),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(search);
    });
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-10 sm:py-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_40%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Namibia&apos;s verified car wash discovery platform
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Find. Book. Wash. Track. Pay.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Discover verified car washes near you, compare services, check queue
              visibility, request bookings and explore future POS-ready profiles.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Stat value={String(platformStats.totalListings)} label="Demo listings" />
              <Stat value="1st" label="Primary pilot" />
              <Stat value="2 mo." label="Free partner trial" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#discover"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-400/20"
              >
                Explore carwashes
              </a>
              <Link
                href="/carwashes/out-of-nature"
                className="rounded-xl border border-white/20 px-5 py-3 font-bold text-white hover:bg-white/10"
              >
                View primary partner
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900/90 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-cyan-300">Primary Partner</p>
                  <h2 className="mt-1 text-2xl font-black">Out of Nature Carwash</h2>
                  <p className="mt-2 text-slate-300">Erf 2255 Stockholm Street, Windhoek</p>
                </div>
                <ShieldCheck className="h-9 w-9 text-cyan-300" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Info icon={<MapPin />} label="Location" value="Windhoek" />
                <Info icon={<Clock />} label="Queue" value="3 cars" />
                <Info icon={<Car />} label="Services" value="Wash + extras" />
                <Info icon={<BadgeCheck />} label="Trust" value="Verified pilot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="discover" className="border-y border-white/10 bg-slate-900/70 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                Discovery
              </p>
              <h2 className="mt-2 text-3xl font-black">Search carwashes in Windhoek</h2>
              <p className="mt-2 max-w-2xl text-slate-300">
                Search by name, area, service, extras, kitchen/bar, mobile chef,
                queue, or payment option.
              </p>
            </div>

            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try: mats, SUV, kitchen, Rand Street..."
                className="w-full rounded-2xl border border-white/10 bg-white px-12 py-4 text-slate-950 outline-none ring-cyan-400/30 placeholder:text-slate-500 focus:ring-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black">Recommended top carwashes</h2>
              <p className="mt-1 text-sm text-slate-400">
                Demo ranking for platform discovery. Real ratings will come from verified customer reviews.
              </p>
            </div>
            <Star className="h-6 w-6 text-cyan-300" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {recommended.map((carwash) => (
              <CarwashCard key={carwash.slug} carwash={carwash} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black">All discovery listings</h2>
              <p className="mt-1 text-sm text-slate-400">
                Showing {filtered.length} of {carWashes.length} demo carwash listings.
              </p>
            </div>
            <Compass className="h-6 w-6 text-cyan-300" />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {filtered.map((carwash) => (
              <CarwashCard key={carwash.slug} carwash={carwash} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
              No matching carwash found yet. Try a different search term.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-2xl font-black text-cyan-300">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
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
      <p className="font-bold">{value}</p>
    </div>
  );
}

function CarwashCard({
  carwash,
  compact = false,
}: {
  carwash: (typeof carWashes)[number];
  compact?: boolean;
}) {
  const topServices = carwash.services
    .flatMap((service) => service.items.slice(0, 2).map((item) => item.name))
    .slice(0, compact ? 3 : 5);

  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white/[0.09]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-200">
              {carwash.partnerLabel}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
              {carwash.status}
            </span>
          </div>
          <h3 className="mt-4 text-xl font-black">{carwash.name}</h3>
          <p className="mt-2 flex gap-2 text-sm text-slate-300">
            <MapPin className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
            {carwash.address}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-950/60 px-3 py-2 text-right">
          <div className="flex items-center gap-1 text-cyan-300">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-black">{carwash.rating.toFixed(1)}</span>
          </div>
          <p className="text-xs text-slate-400">{carwash.reviews} demo reviews</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 text-sm">
        <MiniMetric label="Queue" value={`${carwash.currentQueue} cars`} />
        <MiniMetric label="Wait" value={`${carwash.estimatedWaitMinutes} min`} />
        <MiniMetric label="Bays" value={String(carwash.availableBays)} />
      </div>

      {!compact && (
        <>
          <div className="mt-5 flex flex-wrap gap-2">
            {topServices.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            <Pill icon={<Car />} label={`${carwash.services.length} service groups`} />
            <Pill icon={<Utensils />} label={`${carwash.menus.length} menu group`} />
            <Pill icon={<Users />} label={`${carwash.washers.length} washer aliases`} />
          </div>
        </>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={`/carwashes/${carwash.slug}`}
          className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950"
        >
          View profile
        </Link>
        <a
          href={carwash.mapsUrl}
          target="_blank"
          className="rounded-xl border border-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/10"
        >
          Map
        </a>
        <a
          href={`tel:${carwash.phone}`}
          className="rounded-xl border border-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/10"
        >
          Call
        </a>
      </div>
    </article>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-950/50 p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 font-black text-white">{value}</p>
    </div>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-slate-950/40 px-3 py-2 text-xs text-slate-300">
      <span className="text-cyan-300">{icon}</span>
      {label}
    </div>
  );
}
