import { PlayIcon } from "lucide-react"
import Image from "next/image"
import Album from "../../../public/album.png";

const Albuns = () => {
  return (
    <div className="w-56 md:w-auto">
        <a href="" className="group max-h-20 flex items-center gap-4 bg-white/10 rounded-md overflow-hidden
         hover:bg-white/20 transition-colors">
            <Image className="h-full" width={96} src={Album} alt=""></Image>
            <span>Unlimited Love</span>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 
            invisible group-hover:visible">
              <PlayIcon/>
            </button>
            </a>
    </div>
  )
}

export default Albuns;