import { officeSpace } from '../types/officeSpace.types'
import Image from 'next/image'
import Link from 'next/link'


function CardOffice({dataOffice}: {dataOffice: officeSpace}) {
return (
<Link href={`/office/${dataOffice.slug}`} className="card">
    <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
        <div className="thumbnail-container relative w-full h-[200px]">

            {dataOffice.tags.map((tag, index) => (
            <p
                key={index} className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                {tag}
            </p>
            ))}

            <Image width={400} height={200}  src={dataOffice.image} className="w-full h-full object-cover"
                alt="thumbnails" />
        </div>
        <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
            <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                {dataOffice.title}
            </h3>
            <div className="flex items-center justify-between">
                <p className="font-semibold text-xl leading-[30px]">
                    Rp {dataOffice.price.toLocaleString('id')}
                </p>
                <div className="flex items-center justify-end gap-[6px]">
                    <p className="font-semibold">{dataOffice.duration}</p>
                    <Image width={20} height={20} src="/assets/images/icons/clock.svg" alt="icon" />
                </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-end gap-[6px]">
                    <Image width={25} height={25} src="/assets/images/icons/location.svg" alt="icon" />
                    <p className="font-semibold">{dataOffice.location}</p>
                </div>
                <div className="flex items-center justify-end gap-[6px]">
                    <p className="font-semibold">{dataOffice.rating}/5</p>
                    <Image width={25} height={25} src="/assets/images/icons/Star 1.svg" alt="icon" />
                </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-end gap-[6px]">
                    <Image width={25} height={25} src="/assets/images/icons/wifi.svg" alt="icon" />
                    <p className="font-semibold">High Speed Wifi</p>
                </div>
                <div className="flex items-center justify-end gap-[6px]">
                    <Image width={25} height={25} src="/assets/images/icons/security-user.svg" alt="icon" />
                    {/* <p className="font-semibold">{dataOffice.features[3]}</p> */}
                    <p>asdadas</p>
                </div>
            </div>
        </div>
    </div>
</Link>
)
}

export default CardOffice
