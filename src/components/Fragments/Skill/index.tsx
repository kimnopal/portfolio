import SectionHeading from "@/components/Elements/Heading/SectionHeading";
import Image from "next/image";
import home from "@/data/home.json"

const Skill = () => {
    return (
        <section className="mb-12">
            <SectionHeading>Current Used Tech Stack</SectionHeading>
            <div
                className="grid grid-cols-[repeat(auto-fit,minmax(50px,_1fr))] gap-6 md:grid-cols-9 md:gap-8 items-center">
                {home.skill.map((item, index) => (
                    <Image key={index} src={item.src} alt={item.alt} width={128} height={128} className="w-full object-cover grayscale transition-all hover:grayscale-0 hover:scale-125" />
                ))}
            </div>
        </section>
    );
}

export default Skill;