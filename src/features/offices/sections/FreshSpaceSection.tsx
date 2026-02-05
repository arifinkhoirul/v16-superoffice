import CardOffice from '../Components/CardOffice'
import { officeSpaces } from '../data/officeSpaces.mock'




// type User = {
//     id: number,
//     title: string,
//     body: string
// }



async function FreshSpaceSection() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: 'force-cache'})

    // const users: User[] = await res.json()
    // console.log(users)




return (
<section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
    <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
        Browse Our Fresh Space.
        <br />
        For Your Better Productivity.
    </h2>
    <div className="grid grid-cols-3 gap-[30px]">
        {officeSpaces.map((office) => (
            <CardOffice key={office.id} dataOffice={office}/>
        ))}
    </div>
</section>
)
}

export default FreshSpaceSection
