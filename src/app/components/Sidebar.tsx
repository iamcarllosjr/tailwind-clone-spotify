import { HomeIcon, Library, Search } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <nav className="space-y-5 mt-5">
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
            <HomeIcon/> 
            Home
            </a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
            <Search/>
            Search</a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
            <Library/>
            Your Library</a>
          </nav>

          <nav className="mt-6 pt-10 border-t border-zinc-800">
            <nav className="flex flex-col gap-3">
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">Top Hits Brasil</a>
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">Reggaeton</a>
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">Sertanejo Universitáio</a>
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">Top Pagodes</a>
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">My Playlist #5</a>
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">Top Brasil Momento</a>
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">Pop International</a>
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">Racionais</a>
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">Rock</a>
              <a href="" className="hover:text-zinc-100 text-sm text-zinc-400">Imagine Dragons</a>
            </nav>
          </nav>
        </aside>
  )
}

export default Sidebar;