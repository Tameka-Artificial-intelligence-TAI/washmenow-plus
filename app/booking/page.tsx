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
