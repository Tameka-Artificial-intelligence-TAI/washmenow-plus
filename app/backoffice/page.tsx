import { pilotCarwash } from "@/data/seed";

export default function BackofficePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold text-cyan-700">Owner Dashboard Demo</p>
          <h1 className="text-3xl font-bold">{pilotCarwash.name}</h1>
          <p className="mt-2 text-slate-600">
            Manage queue, bookings, payments and profile updates.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Metric title="Cars in Queue" value={String(pilotCarwash.currentQueue)} />
          <Metric title="Available Bays" value={String(pilotCarwash.availableBays)} />
          <Metric title="Estimated Wait" value={`${pilotCarwash.estimatedWaitMinutes} min`} />
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Quick Queue Controls</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-xl bg-slate-900 px-4 py-3 text-white">
              Check In Vehicle
            </button>
            <button className="rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-white">
              Mark In Progress
            </button>
            <button className="rounded-xl border px-4 py-3">
              Mark Completed
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Demo only: next step is connecting these actions to Supabase.
          </p>
        </div>
      </div>
    </main>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-4xl font-bold text-slate-900">{value}</p>
    </div>
  );
}