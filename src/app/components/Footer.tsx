import { Shuffle, SkipBack, PlayIcon, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Heart } from 'lucide-react'
import Image from 'next/image';
import Album from "../../../public/album.png";

const Footer = () => {
  return (
    <footer className="w-full flex items-center gap-10 justify-between bg-zinc-900 border-t border-zinc-700 px-6 py-3">
        <div className="w-full ml-5 md:ml-0 flex justify-center gap-3 ">
          <Image src={Album} alt="" width={56} height={56} className='hidden md:flex'></Image>
        <div className="flex gap-2 md:flex-col items-center md:items-start">
          <strong className="font-normal text-[12px] md:text-sm">Rope</strong>
          <span className=" text-[10px] md:text-xs text-xinc-400">Foo Fighters</span>
        </div>

        <div className="flex-col md:hidden items-center gap-2">
            <div className='flex items-center gap-2'>
               <span className="text-xs text-zinc-400">0:31</span>
               <div className="h-1 rounded-full w-36 bg-zinc-600">
                 <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
               </div>
               <span className="text-xs text-zinc-400">2:14</span>
            </div>
            <div className="flex md:hidden items-center justify-center gap-2">
               <Heart size={20} />
               <PlayIcon size={20} />
            </div>
        </div>
        </div>


        <div className="w-full flex flex-col items-center gap-2">
           <div className="items-center gap-3 hidden md:flex">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack className="text-zinc-200"/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <PlayIcon/>
            </button>
            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
           </div>

           <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-24 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
           </div>
        </div>
      
        <div className="w-full hidden md:flex items-center gap-2">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20}/>

        </div>
      </footer>
  )
}

export default Footer