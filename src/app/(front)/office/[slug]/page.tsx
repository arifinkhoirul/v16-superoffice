import React from 'react'
import Image from 'next/image'
import { officeSpaces } from '@/features/offices/data/officeSpaces.mock'
import { notFound } from 'next/navigation'
import OfficeHeader from '@/components/OfficeHeader'
import FeaturesOffice from '@/components/FeaturesOffice'
import { Metadata } from 'next'
import { off } from 'process'


// GENERATED METADATA--------------------------------------------------------------------------------------

 type props = {
        params: Promise<{ slug: string }>
    }

    export async function generateMetadata(
        { params }: props
    ): Promise<Metadata> {
        const {slug} = await params

        const office = officeSpaces.find((item) => item.slug === slug
    )

    if (!office) {
        return {
            title: "office Not Found",
            description: "city space tidak ditemukan",
        }
    }

    const fullImageUrl = office.image.startsWith("http") ? office.image : `https://yourdomain.com${office.image}`

    return {
    metadataBase: new URL("https://yourdomain.com"),
    title: {
        absolute: `${office.title} - Office`
    },
    description: `cari kantor terbaik di ${office.title}`,
    openGraph: {
        title: `${office.title} - Office Space`,
        description: `temukan ruang kantor di ${office.title}`,
        images: [fullImageUrl]
        },
    twitter: {
        card: "summary_large_image",
        title:  `${office.title} - Office Space`,
        description: `temukan ruang kantor di ${office.title}`,
        images: [fullImageUrl]
        },
    alternates: {
        canonical: `https://yourdomain.com/city/${slug}`
        },
    }
}
// GENERATED METADATA--------------------------------------------------------------------------------------




export default async function OfficeDetailPage({params}: {params: Promise<{slug: string}> }) {
    const dataParamsOffice = (await params).slug
    // console.log(dataParamsOffice)


    const dataOffice = officeSpaces.find((office) => office.slug === dataParamsOffice)

    if(!dataOffice) {
        return notFound()
    }

    console.log(dataOffice)


    return (
            <>
                <OfficeHeader dataImage={dataOffice.image} dataImages={dataOffice.images}/>
                <section id="Details" className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10">
                    <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">

                        {dataOffice.tags.map((tag) => (
                            <p key={tag} className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                {tag}
                            </p>
                        ))}
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="font-extrabold text-[32px] leading-[44px]">
                                    {dataOffice.title}
                                </h1>
                                <div className="flex items-center gap-[6px] mt-[10px]">
                                    <Image width={20} height={20} src="/assets/images/icons/location.svg"  alt="icon" />
                                    <p className="font-semibold">{dataOffice.location}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[6px]">
                                <div className="flex items-center gap-1">
                                    <Image width={24} height={24} src="/assets/images/icons/Star 1.svg" alt="star" />
                                    <Image width={24} height={24} src="/assets/images/icons/Star 1.svg" alt="star" />
                                    <Image width={24} height={24} src="/assets/images/icons/Star 1.svg" alt="star" />
                                    <Image width={24} height={24} src="/assets/images/icons/Star 1.svg" alt="star" />
                                    <Image width={24} height={24} src="/assets/images/icons/Star 5.svg" alt="star" />
                                </div>
                                <p className="font-semibold text-right">{dataOffice.rating}/5 (19,384)</p>
                            </div>
                        </div>
                        <p className="leading-[30px]">
                            {dataOffice.about}
                        </p>
                        <hr className="border-[#F6F5FD]" />
                        <h2 className="font-bold">You Get What You Need Most</h2>
                        <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">

                            {dataOffice.features.map((feature, index) => (
                                <FeaturesOffice key={index} dataSymbol={feature.image} dataCaption={feature.caption} dataDescription={feature.description}/>
                            ))}
                            
                        </div>
                        <hr className="border-[#F6F5FD]" />
                        <div className="flex flex-col gap-[6px]">
                            <h2 className="font-bold">Office Address</h2>
                            <p>{dataOffice.address}</p>
                        </div>
                        <div className="overflow-hidden w-full h-[280px]">
                            <div id="my-map-display" className="h-full w-full max-w-[none] bg-none">
                                <iframe className="h-full w-full border-0"
                                        src={`https://www.google.com/maps/embed/v1/place?q=${dataOffice.title}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`} />
                            </div>
                            <a className="from-embedmap-code" href="https://www.bootstrapskins.com/themes" id="enable-map-data">
                                premium bootstrap themes
                            </a>
                        </div>
                    </div>
                    <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">

                            {dataOffice.isFullyBooked ? (
                                <p className='font-bold text-xl leading-[30px]'> Sorry, at this office is {" "}
                                    <span className='text-[#FF2D2D]'> booked</span> at this moment, try next time.
                                </p>
                            ) : (
                                <div>
                                    <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">
                                        Rp {dataOffice.price.toLocaleString('id')}
                                    </p>
                                    <p className="font-semibold mt-1">For {dataOffice.duration} days working</p>
                                </div>
                            )}

                            <hr className="border-[#F6F5FD]" />
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-3">
                                    <Image width={30} height={30} src="/assets/images/icons/verify.svg" alt="icon" />
                                    <p className="font-semibold leading-[28px]">
                                        Mendapatkan akses pembelajaran terbaru terkait dunia startup
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image width={30} height={30} src="/assets/images/icons/verify.svg" alt="icon" />
                                    <p className="font-semibold leading-[28px]">
                                        Mendapatkan akses pembelajaran terbaru terkait dunia startup
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image width={30} height={30} src="/assets/images/icons/verify.svg" alt="icon" />
                                    <p className="font-semibold leading-[28px]">
                                        Mendapatkan akses pembelajaran terbaru terkait dunia startup
                                    </p>
                                </div>
                            </div>
                            <hr className="border-[#F6F5FD]" />
                            <div className="flex flex-col gap-[14px]">

                                {dataOffice.isFullyBooked ? (
                                    <button
                                        className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
                                        <Image width={20} height={20} src="/assets/images/icons/save-add.svg" alt="icon" />
                                        <span>Save for Later</span>
                                    </button>
                                ) : (
                                    <a target='_blank' href={`https://wa.me/6285770674960?text=Saya ingin booking kantor ${dataOffice.title} detailsnya http://localhost:3000/office/${dataOffice.slug}`}
                                        className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]">
                                        <Image width={20} height={20} src="/assets/images/icons/slider-horizontal-white.svg"
                                            alt="icon" />
                                        <span>Book This Office</span>
                                    </a>
                                )}

                            </div>
                        </div>
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
                            <h2 className="font-bold">Contact Our Sales</h2>
                            <div className="flex flex-col gap-[30px]">

                                {dataOffice.saleContacts.map((sales) => (
                                    <div key={sales.id} className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                                                <Image width={20} height={20} src={sales.photo} className="w-full h-full object-cover"
                                                    alt="photo" />
                                            </div>
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="font-bold">{sales.name}</p>
                                                <p className="text-sm leading-[21px]">{sales.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <a href="#">
                                                <Image width={40} height={40} src="/assets/images/icons/call-green.svg" className="w-10 h-10" alt="icon" />
                                            </a>
                                            <a href="#">
                                                <Image width={40} height={40} src="/assets/images/icons/chat-green.svg" className="w-10 h-10" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
}