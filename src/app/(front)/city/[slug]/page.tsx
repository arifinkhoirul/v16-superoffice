import React from 'react'
import Image from 'next/image'
import { cities } from '@/features/cities/data/cities.mock'
import { notFound } from 'next/navigation';
import { officeSpaces } from '@/features/offices/data/officeSpaces.mock';
import CardOffice from '@/features/offices/Components/CardOffice';
import { Metadata } from 'next';






// export const metadata: Metadata = {
//     title: "City List",
//     description: "Kumpulan City"
// }



// GENERATED METADATA--------------------------------------------------------------------------------------
    type props = {
        params: Promise<{ slug: string }>
    }

    export async function generateMetadata(
        { params }: props
    ): Promise<Metadata> {
        const {slug} = await params

        const city = cities.find((item) => item.slug === slug
    )

    if (!city) {
        return {
            title: "city Not Found",
            description: "city space tidak ditemukan",
        }
    }

    const fullImageUrl = city.image.startsWith("http") ? city.image : `https://yourdomain.com${city.image}`

    return {
    metadataBase: new URL("https://yourdomain.com"),
    title: {
        absolute: `${city.name} - Office`
    },
    description: `cari kantor terbaik di ${city.name}`,
    openGraph: {
        title: `${city.name} - Office Space`,
        description: `temukan ruang kantor di ${city.name}`,
        images: [fullImageUrl]
        },
    twitter: {
        card: "summary_large_image",
        title:  `${city.name} - Office Space`,
        description: `temukan ruang kantor di ${city.name}`,
        images: [fullImageUrl]
        },
    alternates: {
        canonical: `https://yourdomain.com/city/${slug}`
        },
    }
}
// GENERATED METADATA--------------------------------------------------------------------------------------



export default async function CityDetailPage({params}: {params: Promise<{slug: string}> }) {
    const dataParams = (await params).slug

    const city = cities.find((c) => c.slug === dataParams);

    if(!city) {
        return notFound();
    }


    const cityOffices = officeSpaces.filter((space) => space.location === city.name)

    // console.log(city)

    return (
        <>
            <header className="flex flex-col w-full">
                <section id="Hero-Banner" className="relative flex h-[434px]">
                    <div id="Hero-Text"
                        className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10">
                        <h1 className="font-extrabold text-[50px] leading-[60px]">
                            Great Office in <br />{" "}
                            <span className="text-[#0D903A]">Jakarta Pusat City</span>
                        </h1>
                        <p className="text-lg leading-8 text-[#000929]">
                            Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
                            dan sehat dalam tumbuhkan karir.
                        </p>
                    </div>
                    <div id="Hero-Image"
                        className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[434px] rounded-bl-[40px] overflow-hidden">
                        <Image fill priority src="/assets/images/thumbnails/thumbnail-details-4.png" className="w-full h-full object-cover"
                            alt="hero background" />
                    </div>
                </section>
            </header>
            <section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]">
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    Browse Offices
                </h2>
                <div className="grid grid-cols-3 gap-[30px]">
                    
                    {/* {cityOffices.length > 0} */}

                    {cityOffices.length > 0 ? (
                        <div>
                            {cityOffices.map((cityOffice) => (
                                <CardOffice key={cityOffice.id} dataOffice={cityOffice}/>
                            ))}
                        </div>
                    ) : (
                        <p>data office belum tersedia</p>
                    )}


                </div>
            </section>
        </>
    )
}
