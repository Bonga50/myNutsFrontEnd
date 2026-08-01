export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-black tracking-tighter">Dashboard</h1>
      <p className="mt-2 text-sm tracking-tight text-[#171717]/60">
        Overview of your bookings and activity.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <div className="border-2 border-[#171717] bg-white p-6">
          <p className="text-sm font-bold tracking-tight text-[#171717]/60">
            Upcoming bookings
          </p>
          <p className="mt-2 text-4xl font-black tracking-tighter">0</p>
        </div>
        <div className="border-2 border-[#171717] bg-white p-6">
          <p className="text-sm font-bold tracking-tight text-[#171717]/60">
            Total clients
          </p>
          <p className="mt-2 text-4xl font-black tracking-tighter">0</p>
        </div>
        <div className="border-2 border-[#171717] bg-white p-6">
          <p className="text-sm font-bold tracking-tight text-[#171717]/60">
            This week
          </p>
          <p className="mt-2 text-4xl font-black tracking-tighter">0</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center border-2 border-dashed border-[#171717]/30 bg-white/50 px-6 py-16">
        <p className="text-sm font-bold tracking-tight text-[#171717]/40">
          Your bookings will appear here once you create them.
        </p>
      </div>
    </div>
  );
}
