#!/usr/bin/env bash
set -e

echo "Applying WashMeNow+ multi-carwash discovery update..."

mkdir -p data
mkdir -p components
mkdir -p app/carwashes
mkdir -p app/carwashes/[slug]
mkdir -p app/booking
mkdir -p app/backoffice

# Remove old hard-coded profile route so all carwash profiles use the new dynamic route.
rm -rf app/carwashes/out-of-nature

cat > data/carwashes.ts <<'EOF'
export type ServiceItem = {
  name: string;
  price: string;
  note?: string;
};

export type ServiceCategory = {
  category: string;
  description: string;
  items: ServiceItem[];
};

export type WasherProfile = {
  alias: string;
  role: string;
  specialties: string[];
  privacyNote: string;
};

export type Carwash = {
  slug: string;
  name: string;
  partnerLabel: string;
  isPrimaryPartner: boolean;
  status: string;
  verification: string;
  address: string;
  phone: string;
  mapsUrl: string;
  instagramUrl?: string;
  city: string;
  region: string;
  operatingHours: string;
  rating: number;
  reviews: number;
  ratingNote: string;
  currentQueue: number;
  availableBays: number;
  estimatedWaitMinutes: number;
  lastQueueUpdated: string;
  description: string;
  tags: string[];
  paymentMethods: string[];
  services: ServiceCategory[];
  menus: ServiceCategory[];
  washers: WasherProfile[];
};

export const carWashes: Carwash[] = [
  {
    slug: "out-of-nature",
    name: "Out of Nature Carwash",
    partnerLabel: "Primary Partner",
    isPrimaryPartner: true,
    status: "Verified Pilot",
    verification: "First WashMeNow+ pilot partner",
    address: "Erf 2255 Stockholm Street, Windhoek",
    phone: "081 336 9016",
    mapsUrl: "https://maps.app.goo.gl/Bj4SVA4sEc9PSLW79",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Open today • Confirm with owner",
    rating: 4.9,
    reviews: 28,
    ratingNote: "MVP demo score based on pilot positioning",
    currentQueue: 3,
    availableBays: 1,
    estimatedWaitMinutes: 35,
    lastQueueUpdated: "Updated 7 minutes ago",
    description:
      "Out of Nature Carwash is the first/primary WashMeNow+ pilot partner. This profile demonstrates verified listing, queue visibility, service pricing, booking requests, and future POS/payment tracking.",
    tags: ["Primary Partner", "Verified", "SUV", "Mats", "Car Seats", "POS", "Pilot"],
    paymentMethods: ["Cash", "POS", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Pricing captured from the pilot service board. Confirm final pricing with the owner before public launch.",
        items: [
          { name: "SUV • Denim Wash", price: "N$90" },
          { name: "SUV • Outside", price: "N$50" },
          { name: "SUV • Inside", price: "N$40" },
          { name: "SUV • Engine", price: "N$30" },
          { name: "SUV • Under Wash", price: "N$30" },
          { name: "Single Cab • Denim Wash", price: "N$80" },
          { name: "Single Cab • Outside", price: "N$50" },
          { name: "Single Cab • Inside", price: "N$30" },
          { name: "Double Cab • Denim Wash", price: "N$90" },
          { name: "Double Cab • Engine", price: "N$50" },
          { name: "Sedan • Denim Wash", price: "N$70" },
          { name: "Mini Truck • Denim Wash", price: "N$100" },
        ],
      },
      {
        category: "Extras",
        description: "Add-on cleaning services available from the pilot board.",
        items: [
          { name: "Mats", price: "N$150" },
          { name: "Car Seats", price: "N$350" },
        ],
      },
    ],
    menus: [
      {
        category: "Kitchen / Bar / Add-ons",
        description: "Placeholder for future owner-managed menu, stock and POS items.",
        items: [
          { name: "Soft drinks", price: "Coming soon", note: "Owner to confirm" },
          { name: "Water", price: "Coming soon", note: "Owner to confirm" },
          { name: "Mobile chef / event activation", price: "On request", note: "For special events" },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-ON-01",
        role: "Lead washer",
        specialties: ["SUV wash", "Interior care", "Queue updates"],
        privacyNote: "Alias shown publicly. Full identity remains private to the owner/admin team.",
      },
      {
        alias: "Washer WMN-ON-02",
        role: "Detail assistant",
        specialties: ["Wheels", "Mats", "Exterior finish"],
        privacyNote: "Alias shown publicly. Full identity remains private to the owner/admin team.",
      },
    ],
  },
  {
    slug: "rand-street-carwash",
    name: "Rand Street Carwash",
    partnerLabel: "Discovery Listing",
    isPrimaryPartner: false,
    status: "Listing Preview",
    verification: "Pending platform verification",
    address: "00000, Shoveller St, Windhoek",
    phone: "0853990746",
    mapsUrl: "https://maps.app.goo.gl/YbEL7JkLNdNZERte6",
    instagramUrl: "https://instagram.com/rand_street_carwash?utm_medium=copy_link",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Hours to be confirmed",
    rating: 4.8,
    reviews: 22,
    ratingNote: "MVP demo score until real reviews are collected",
    currentQueue: 2,
    availableBays: 2,
    estimatedWaitMinutes: 20,
    lastQueueUpdated: "Demo queue • not live yet",
    description:
      "Rand Street Carwash listing preview showing how social-first carwashes can be discovered, verified and converted into owner-managed profiles.",
    tags: ["Instagram", "Discovery", "Car Wash", "Events", "Windhoek"],
    paymentMethods: ["Cash", "POS to confirm", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Indicative listing categories. Prices must be confirmed with the owner during onboarding.",
        items: [
          { name: "Small vehicle wash", price: "From N$50", note: "Placeholder" },
          { name: "SUV / Double cab wash", price: "From N$80", note: "Placeholder" },
          { name: "Interior cleaning", price: "From N$30", note: "Placeholder" },
          { name: "Engine wash", price: "From N$30", note: "Placeholder" },
        ],
      },
      {
        category: "Extras",
        description: "Potential upsell services to confirm.",
        items: [
          { name: "Mats", price: "On request" },
          { name: "Car seats", price: "On request" },
          { name: "Event carwash activation", price: "On request" },
        ],
      },
    ],
    menus: [
      {
        category: "Kitchen / Bar / Event Menu",
        description: "Social/event menu placeholder for future campaign promotions.",
        items: [
          { name: "Cold drinks", price: "N$15–N$30", note: "Placeholder" },
          { name: "Braai / food pop-up", price: "On request", note: "Event-based" },
          { name: "Mobile chef partner", price: "On request", note: "Optional partner service" },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-RS-01",
        role: "Washer",
        specialties: ["Exterior wash", "Customer handover"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
    ],
  },
  {
    slug: "bix-carwash",
    name: "Bix Carwash",
    partnerLabel: "Discovery Listing",
    isPrimaryPartner: false,
    status: "Listing Preview",
    verification: "Pending platform verification",
    address: "F3C2+7HR, Windhoek",
    phone: "0812458561",
    mapsUrl: "https://maps.app.goo.gl/PtECRCtEy5vJzTJ99",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Hours to be confirmed",
    rating: 4.7,
    reviews: 19,
    ratingNote: "MVP demo score until real reviews are collected",
    currentQueue: 4,
    availableBays: 1,
    estimatedWaitMinutes: 45,
    lastQueueUpdated: "Demo queue • not live yet",
    description:
      "Bix Carwash listing preview for a future verified profile with queue, service pricing, booking and staff privacy controls.",
    tags: ["Car Wash", "Interior", "Exterior", "Queue Preview"],
    paymentMethods: ["Cash", "POS to confirm", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Indicative service categories for MVP discovery.",
        items: [
          { name: "Standard wash", price: "From N$50", note: "Placeholder" },
          { name: "Full wash", price: "From N$80", note: "Placeholder" },
          { name: "Interior vacuum", price: "From N$30", note: "Placeholder" },
          { name: "Engine wash", price: "From N$30", note: "Placeholder" },
        ],
      },
      {
        category: "Extras",
        description: "Potential add-ons to confirm with owner.",
        items: [
          { name: "Mats", price: "On request" },
          { name: "Sofas / upholstery", price: "On request" },
          { name: "Car seats", price: "On request" },
        ],
      },
    ],
    menus: [
      {
        category: "Kitchen / Bar",
        description: "Placeholder for optional menu and POS add-ons.",
        items: [
          { name: "Water / soft drink", price: "N$10–N$25", note: "Placeholder" },
          { name: "Snack items", price: "On request" },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-BX-01",
        role: "Washer",
        specialties: ["Wash bay updates", "Exterior wash"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
      {
        alias: "Washer WMN-BX-02",
        role: "Assistant",
        specialties: ["Interior", "Vacuum", "Mats"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
    ],
  },
  {
    slug: "city-car-wash",
    name: "City Car Wash",
    partnerLabel: "Discovery Listing",
    isPrimaryPartner: false,
    status: "Listing Preview",
    verification: "Pending platform verification",
    address: "Garten Street, Windhoek",
    phone: "0812595359",
    mapsUrl: "https://maps.app.goo.gl/iYU2bT5iNpL2v3Z66",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Hours to be confirmed",
    rating: 4.6,
    reviews: 17,
    ratingNote: "MVP demo score until real reviews are collected",
    currentQueue: 1,
    availableBays: 2,
    estimatedWaitMinutes: 15,
    lastQueueUpdated: "Demo queue • not live yet",
    description:
      "City Car Wash listing preview for central Windhoek discovery, services, queue visibility and customer booking flow.",
    tags: ["Central", "Car Wash", "Quick Wash", "Windhoek"],
    paymentMethods: ["Cash", "POS to confirm", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Indicative services for demo listing.",
        items: [
          { name: "Quick outside wash", price: "From N$40", note: "Placeholder" },
          { name: "Inside + outside wash", price: "From N$70", note: "Placeholder" },
          { name: "SUV wash", price: "From N$90", note: "Placeholder" },
          { name: "Engine wash", price: "From N$30", note: "Placeholder" },
        ],
      },
      {
        category: "Extras",
        description: "Add-on items to confirm.",
        items: [
          { name: "Mats", price: "On request" },
          { name: "Car seats", price: "On request" },
          { name: "Polish / detailing", price: "On request" },
        ],
      },
    ],
    menus: [
      {
        category: "Customer Waiting Area Menu",
        description: "Future owner-managed menu placeholder.",
        items: [
          { name: "Coffee / tea", price: "N$15–N$30", note: "Placeholder" },
          { name: "Cold drink", price: "N$15–N$25", note: "Placeholder" },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-CC-01",
        role: "Wash attendant",
        specialties: ["Fast check-in", "Queue updates"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
    ],
  },
  {
    slug: "scaras-car-wash",
    name: "Scara's Car Wash",
    partnerLabel: "Discovery Listing",
    isPrimaryPartner: false,
    status: "Listing Preview",
    verification: "Pending platform verification",
    address: "F392+8P9, Windhoek",
    phone: "0812720030",
    mapsUrl: "https://maps.app.goo.gl/fBjqRNE2A6uE3U48A",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Hours to be confirmed",
    rating: 4.5,
    reviews: 15,
    ratingNote: "MVP demo score until real reviews are collected",
    currentQueue: 5,
    availableBays: 1,
    estimatedWaitMinutes: 50,
    lastQueueUpdated: "Demo queue • not live yet",
    description:
      "Scara's Car Wash listing preview showing how WashMeNow+ can present verified services, queue status, menus and privacy-safe staff aliases.",
    tags: ["Car Wash", "Queue Preview", "Extras", "Windhoek"],
    paymentMethods: ["Cash", "POS to confirm", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Indicative MVP listing services.",
        items: [
          { name: "Standard wash", price: "From N$50", note: "Placeholder" },
          { name: "Full wash", price: "From N$80", note: "Placeholder" },
          { name: "Interior wash", price: "From N$30", note: "Placeholder" },
          { name: "Under wash", price: "From N$30", note: "Placeholder" },
        ],
      },
      {
        category: "Extras",
        description: "Potential upsell services.",
        items: [
          { name: "Mats", price: "On request" },
          { name: "Sofas", price: "On request" },
          { name: "Car seats", price: "On request" },
          { name: "Mobile wash", price: "On request" },
        ],
      },
    ],
    menus: [
      {
        category: "Bar / Kitchen / Mobile Chef",
        description: "Placeholder for future events, promotions and menus.",
        items: [
          { name: "Soft drinks", price: "N$15–N$30", note: "Placeholder" },
          { name: "Food plate", price: "On request", note: "Owner to confirm" },
          { name: "Mobile chef activation", price: "On request", note: "Event-based" },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-SC-01",
        role: "Wash attendant",
        specialties: ["Exterior", "Interior", "Customer updates"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
    ],
  },
];

export function getPrimaryCarwash() {
  return carWashes.find((carwash) => carwash.isPrimaryPartner) ?? carWashes[0];
}

export function getCarwashBySlug(slug: string) {
  return carWashes.find((carwash) => carwash.slug === slug);
}

export function getRecommendedCarwashes(limit = 8) {
  return [...carWashes].sort((a, b) => {
    if (a.isPrimaryPartner && !b.isPrimaryPartner) return -1;
    if (!a.isPrimaryPartner && b.isPrimaryPartner) return 1;
    return b.rating - a.rating;
  }).slice(0, limit);
}

export const platformStats = {
  totalListings: carWashes.length,
  verifiedPilots: carWashes.filter((carwash) => carwash.isPrimaryPartner).length,
  discoveryPreviews: carWashes.filter((carwash) => !carwash.isPrimaryPartner).length,
};
EOF

cat > data/seed.ts <<'EOF'
import { carWashes, getPrimaryCarwash } from "./carwashes";

export const pilotCarwash = getPrimaryCarwash();
export { carWashes };
EOF

cat > components/DiscoveryClient.tsx <<'EOF'
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
EOF

cat > app/page.tsx <<'EOF'
import DiscoveryClient from "@/components/DiscoveryClient";

export default function Home() {
  return <DiscoveryClient />;
}
EOF

cat > app/carwashes/page.tsx <<'EOF'
import DiscoveryClient from "@/components/DiscoveryClient";

export default function CarwashesPage() {
  return <DiscoveryClient />;
}
EOF

cat > app/carwashes/[slug]/page.tsx <<'EOF'
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Car,
  Clock,
  CreditCard,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Utensils,
  Users,
} from "lucide-react";
import { carWashes, getCarwashBySlug, getRecommendedCarwashes } from "@/data/carwashes";

export function generateStaticParams() {
  return carWashes.map((carwash) => ({
    slug: carwash.slug,
  }));
}

export default async function CarwashProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carwash = getCarwashBySlug(slug);

  if (!carwash) {
    notFound();
  }

  const moreCarwashes = getRecommendedCarwashes(4).filter((item) => item.slug !== carwash.slug);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to discovery
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-bold text-cyan-200">
                  {carwash.partnerLabel}
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-300">
                  {carwash.status}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                {carwash.name}
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                {carwash.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${carwash.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-black text-slate-950"
                >
                  <Phone className="h-4 w-4" />
                  Call {carwash.phone}
                </a>
                <a
                  href={carwash.mapsUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-bold text-white hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4" />
                  Open Maps
                </a>
                {carwash.instagramUrl && (
                  <a
                    href={carwash.instagramUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-bold text-white hover:bg-white/10"
                  >
                    Instagram
                  </a>
                )}
                <Link
                  href={`/booking?carwash=${carwash.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-bold text-white hover:bg-white/10"
                >
                  Book Service
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <ProfileMetric icon={<Star />} label="Demo rating" value={`${carwash.rating.toFixed(1)} / 5`} />
                <ProfileMetric icon={<Clock />} label="Queue" value={`${carwash.currentQueue} cars`} />
                <ProfileMetric icon={<Car />} label="Est. wait" value={`${carwash.estimatedWaitMinutes} min`} />
                <ProfileMetric icon={<BadgeCheck />} label="Trust" value={carwash.status} />
              </div>
              <p className="mt-4 text-xs text-slate-400">{carwash.ratingNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <Card title="Services & Pricing" icon={<Car />}>
            <div className="grid gap-4">
              {carwash.services.map((group) => (
                <div key={group.category} className="rounded-3xl border bg-slate-50 p-4">
                  <h3 className="font-black text-slate-950">{group.category}</h3>
                  <p className="mt-1 text-sm text-slate-600">{group.description}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {group.items.map((item) => (
                      <PriceItem key={`${group.category}-${item.name}`} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Kitchen / Bar / Mobile Chef / Menus" icon={<Utensils />}>
            <div className="grid gap-4">
              {carwash.menus.map((menu) => (
                <div key={menu.category} className="rounded-3xl border bg-slate-50 p-4">
                  <h3 className="font-black text-slate-950">{menu.category}</h3>
                  <p className="mt-1 text-sm text-slate-600">{menu.description}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {menu.items.map((item) => (
                      <PriceItem key={`${menu.category}-${item.name}`} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Washer Profiles — Privacy Protected" icon={<Users />}>
            <p className="mb-4 text-sm text-slate-600">
              Public profiles use aliases only. Full staff identities should remain private to the verified owner/admin team.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {carwash.washers.map((washer) => (
                <div key={washer.alias} className="rounded-3xl border bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-100 font-black text-cyan-800">
                      {washer.alias.split("-").at(-1)}
                    </div>
                    <div>
                      <h3 className="font-black">{washer.alias}</h3>
                      <p className="text-sm text-slate-600">{washer.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {washer.specialties.map((specialty) => (
                      <span key={specialty} className="rounded-full bg-white px-3 py-1 text-xs text-slate-700">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-slate-500">{washer.privacyNote}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-cyan-700">
              <Clock className="h-5 w-5" />
              <h2 className="font-black">Live Queue Preview</h2>
            </div>
            <p className="mt-5 text-5xl font-black">{carwash.currentQueue}</p>
            <p className="text-slate-500">cars currently waiting</p>
            <p className="mt-3 text-sm text-slate-600">
              Estimated wait: {carwash.estimatedWaitMinutes} minutes
            </p>
            <p className="mt-2 text-xs text-slate-500">{carwash.lastQueueUpdated}</p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-cyan-700">
              <ShieldCheck className="h-5 w-5" />
              <h2 className="font-black">Verified Info</h2>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>{carwash.verification}</p>
              <p>{carwash.address}</p>
              <p>{carwash.city}, {carwash.region}</p>
              <p>{carwash.operatingHours}</p>
              <p>Payments: {carwash.paymentMethods.join(", ")}</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-sm">
            <h2 className="font-black">Partner Pilot</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              WashMeNow+ is onboarding carwashes through a two-month pilot to validate discovery, bookings, queue updates and owner dashboard value.
            </p>
            <Link
              href="/backoffice"
              className="mt-5 inline-flex rounded-xl bg-cyan-400 px-4 py-3 text-sm font-black text-slate-950"
            >
              View backoffice demo
            </Link>
          </div>
        </aside>
      </section>

      <section className="border-t bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-black">More carwashes to explore</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {moreCarwashes.map((item) => (
              <Link
                key={item.slug}
                href={`/carwashes/${item.slug}`}
                className="rounded-3xl border p-5 transition hover:border-cyan-300 hover:shadow-md"
              >
                <p className="text-sm text-cyan-700">{item.partnerLabel}</p>
                <h3 className="mt-1 font-black">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.address}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2 text-cyan-700">
        {icon}
        <h2 className="text-xl font-black text-slate-950">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ProfileMetric({
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
      <p className="text-xs text-slate-400">{label}</p>
      <p className="font-black">{value}</p>
    </div>
  );
}

function PriceItem({
  item,
}: {
  item: {
    name: string;
    price: string;
    note?: string;
  };
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-600">{item.name}</p>
      <p className="mt-1 text-lg font-black text-slate-950">{item.price}</p>
      {item.note && <p className="mt-1 text-xs text-slate-500">{item.note}</p>}
    </div>
  );
}
EOF

cat > app/booking/page.tsx <<'EOF'
"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { carWashes } from "@/data/carwashes";

export default function BookingPage() {
  const [selectedSlug, setSelectedSlug] = useState(carWashes[0].slug);
  const [submitted, setSubmitted] = useState(false);

  const selectedCarwash = useMemo(
    () => carWashes.find((carwash) => carwash.slug === selectedSlug) ?? carWashes[0],
    [selectedSlug]
  );

  const services = selectedCarwash.services.flatMap((group) =>
    group.items.map((item) => `${group.category} • ${item.name} (${item.price})`)
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to discovery
        </Link>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Booking Request Demo
          </p>
          <h1 className="mt-3 text-3xl font-black">Request a carwash booking</h1>
          <p className="mt-3 text-slate-300">
            This MVP form demonstrates the flow. Next step: save requests to Supabase and notify the carwash owner.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-3xl bg-cyan-400 p-6 text-slate-950">
              <CheckCircle2 className="h-8 w-8" />
              <h2 className="mt-3 text-2xl font-black">Demo request captured</h2>
              <p className="mt-2">
                In production, this will create a booking request for {selectedCarwash.name} and notify the owner/staff team.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-5 rounded-xl bg-slate-950 px-4 py-3 font-black text-white"
              >
                Submit another demo request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-200">Carwash</span>
                <select
                  value={selectedSlug}
                  onChange={(event) => setSelectedSlug(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                >
                  {carWashes.map((carwash) => (
                    <option key={carwash.slug} value={carwash.slug}>
                      {carwash.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-200">Customer name / nickname</span>
                <input
                  required
                  placeholder="e.g. Heinrich or WMN Guest"
                  className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-200">Phone number</span>
                <input
                  required
                  placeholder="e.g. 081..."
                  className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-200">Service</span>
                <select className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950">
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-slate-200">Preferred date</span>
                  <input
                    type="date"
                    className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-slate-200">Preferred time</span>
                  <input
                    type="time"
                    className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-200">Notes</span>
                <textarea
                  placeholder="Vehicle type, special request, mobile wash request, etc."
                  className="min-h-28 rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                />
              </label>

              <button className="rounded-2xl bg-cyan-400 px-5 py-4 font-black text-slate-950">
                Submit demo booking request
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
EOF

cat > app/backoffice/page.tsx <<'EOF'
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
EOF

echo "WashMeNow+ multi-carwash discovery update applied."
echo ""
echo "Next commands:"
echo "  npm run build"
echo "  npm run dev"
echo "  git add ."
echo "  git commit -m \"Add multi-carwash discovery listings\""
echo "  git push"
