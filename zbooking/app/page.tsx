import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b-2 border-[#171717]">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-xl font-black tracking-tighter">zBooking</span>
          <nav className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/sign-in">Log in</Link>
            </Button>
            <Button variant="primary" size="sm" asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="border-b-2 border-[#171717] px-6 py-24">
          <div className="mx-auto max-w-4xl ">
            <h1 className="text-5xl font-black leading-tight tracking-tighter md:text-3xl">
              Book smarter,<br />
              <span className="text-coral">not harder</span>
            </h1>
            <p className=" mt-6 max-w-2xl text-lg leading-relaxed">
              zBooking helps service providers manage their schedules and
              lets clients book appointments in seconds. No back-and-forth,
              no double-booking — just seamless scheduling.
            </p>
            <div className="mt-10 flex gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/sign-up">Start booking</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/sign-up">Learn more</Link>
              </Button>
            </div>
          </div>
        </section>



        {/* <footer className="px-6 py-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between text-sm tracking-tight">
            <span className="font-bold">&copy; {new Date().getFullYear()} zBooking</span>
            <nav className="flex gap-6">
              <span className="cursor-pointer hover:underline">Privacy</span>
              <span className="cursor-pointer hover:underline">Terms</span>
              <span className="cursor-pointer hover:underline">Support</span>
            </nav>
          </div>
        </footer> */}
      </main>
    </div>
  )
}
