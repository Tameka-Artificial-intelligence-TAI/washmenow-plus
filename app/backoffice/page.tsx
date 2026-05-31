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
