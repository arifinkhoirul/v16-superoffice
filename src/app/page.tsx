import Header from "@/components/Header";
import BenefitSection from "@/features/benefits/sections/BenefitSection";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import FreshSpaceSection from "@/features/offices/sections/FreshSpaceSection";

export default function Home() {
return (
<>
    <Header />
    <CitiesSection />
    <BenefitSection />
    <FreshSpaceSection />
</>
);
}
