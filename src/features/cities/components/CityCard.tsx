import Image from "next/image"
import { City } from "../types/city.types"
import Link from "next/link"

export default function CityCard({cityData}: {cityData: City}) {
    return (
            <Link href={`/city/${cityData.slug}`} className="card">
                <div className="relative flex shrink-0 w-[230px] h-[300px] rounded-[20px] overflow-hidden">
                    <div
                        className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
                        <h3 className="font-bold text-xl leading-[30px] text-white">
                            {cityData.name}
                        </h3>
                        <p className="text-white">{cityData.officeCount} Offices</p>
                    </div>
                    <Image fill priority src={cityData.image} className="absolute w-full h-full object-cover"
                        alt="thumbnails" />
                </div>
            </Link>
    )
}
