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
    imageUrl?: string;
  };
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
      {item.imageUrl && (
        <div
          className="h-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        />
      )}

      <div className="p-4">
        <p className="text-sm font-semibold text-slate-700">{item.name}</p>
        <p className="mt-1 text-lg font-black text-slate-950">{item.price}</p>
        {item.note && <p className="mt-1 text-xs text-slate-500">{item.note}</p>}
      </div>
    </div>
  );
}
