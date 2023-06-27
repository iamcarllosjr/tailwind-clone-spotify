import Album from "../../../public/album.png";
import Image from "next/image"

const DailyMix = () => {
  return (
    <div>
        <a href="" className="w-36 bg-white/5 hover:bg-white/10 p-2 rounded-md flex flex-col gap-2">
              <Image className="w-full" width={120} height={120} src={Album} alt=""></Image>
              <strong>Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">Red Hot Chili Peppers</span>
            </a>
    </div>
  )
}

export default DailyMix;