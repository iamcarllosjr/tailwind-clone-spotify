import { ChevronRight, ChevronLeft } from "lucide-react";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";
import Albuns from "@/app/components/Albuns";
import DailyMix from "@/app/components/DailyMix";


export default function Home() {
  return (
    <main className="h-screen flex flex-col text-zinc-50">
      <div className="flex flex-1">
        <Sidebar />
        <section className="flex-1 bg-zinc-900 p-6">
          <div className="flex items-center gap-4">
            <button className="bg-black/20 rounded-full p-1 hover:bg-white/5"><ChevronLeft size={30}/></button>
            <button className="bg-black/20 rounded-full p-1 hover:bg-white/5"><ChevronRight size={30}/></button>
          </div>

          <h1 className="text-2xl mt-10 font-semibold tracking-wide">Good Afternoon</h1>

          <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4 mt-4">
          <Albuns/>
          <Albuns/>
          <Albuns/>
          <Albuns/>
          <Albuns/>
          <Albuns/>
          </div>

          <h2 className="text-lg mt-10 font-semibold tracking-wide">Made for Carlos Junior</h2>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 mt-4">
            <DailyMix />
            <DailyMix />
            <DailyMix />
            <DailyMix />
            <DailyMix />
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  )
}
