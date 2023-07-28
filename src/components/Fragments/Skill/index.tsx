import SectionHeading from "@/components/Elements/Heading/SectionHeading";
import Image from "next/image";

const Skill = () => {
    return (
        <section className="mb-12">
            <SectionHeading>Current Used Tech Stack</SectionHeading>
            <div
                className="grid grid-cols-[repeat(auto-fit,minmax(50px,_1fr))] gap-6 md:grid-cols-9 md:gap-8 items-center">
                <Image src="/icons/go.svg" alt="Icon Logo Golang" width={128} height={128} className="w-full object-cover grayscale transition-all hover:grayscale-0 hover:scale-105" />
                <Image src="/icons/typescript.svg" alt="Icon Logo Typescript" width={128} height={128} className="w-full object-cover grayscale transition-all hover:grayscale-0 hover:scale-105" />
                <Image src="/icons/nodejs.svg" alt="Icon Logo NodeJS" width={128} height={128} className="w-full object-cover grayscale transition-all hover:grayscale-0 hover:scale-105" />
                <Image src="/icons/react.svg" alt="Icon Logo React" width={128} height={128} className="w-full object-cover grayscale transition-all hover:grayscale-0 hover:scale-105" />
                <Image src="/icons/nextjs.svg" alt="Icon Logo NextJS" width={128} height={128} className="w-full object-cover contrast-50 transition-all hover:contrast-100 hover:scale-105" />
                <Image src="/icons/astro.svg" alt="Icon Logo Astro" width={128} height={128} className="w-full object-cover contrast-[.2] transition-all hover:contrast-100 hover:scale-105" />
                <Image src="/icons/laravel.svg" alt="Icon Logo Laravel" width={128} height={128} className="w-full object-cover grayscale transition-all hover:grayscale-0 hover:scale-105" />
                <Image src="/icons/mysql.svg" alt="Icon Logo MySQL" width={128} height={128} className="w-full object-cover grayscale transition-all hover:grayscale-0 hover:scale-105" />
            </div>
        </section>
    );
}

export default Skill;