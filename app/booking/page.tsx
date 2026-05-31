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
