import { officeSpaces } from "@/features/offices/data/officeSpaces.mock";
import { City } from "../types/city.types"

const CityName = [
    "jakarta timur",
    "jakarta selatan",
    "bandung",
    "surabaya",
    "yogyakarta",
    "medan",
    "semarang",
    "makassar",
    "bekasi",
    "depok",
]


export const cities: City[] = CityName.map((name,i) =>{
    const officeCount = officeSpaces.filter((space) => space.location === name).length;

    return {
        id: i + 1,
        name,
        officeCount: officeCount,
        image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
        slug: name.toLocaleLowerCase().replace(/ /g, "-")
    }
})