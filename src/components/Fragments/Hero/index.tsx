import { Heading } from "@/components/Elements/Heading";
import Paragraph from "@/components/Elements/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";
// import { motion } from "framer-motion"
const { motion } = require('framer-motion')

const waving = {
    rotate: [0, 14, -8, 14, -4, 10, 0, 0]
}

const Hero = () => {
    return (
        <section className="mb-12">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="w-32 h-32 aspect-square rounded-full overflow-hidden md:min-w-max md:h-48">
                    <Image src="/images/naufal.jpg" alt="Gambar Naufal Hakim" width={500} height={500} className="w-full h-full object-cover object-top" />
                </div>
                <div className="">
                    <div className="mb-2">
                        <Heading variant="h1" className="text-2xl">Hi! <motion.span animate={waving} transition={{ repeat: Infinity, duration: 3, }} className="origin-[70%_70%] inline-block">👋</motion.span></Heading>
                        <Heading variant="h2" className="text-3xl">You can call me</Heading>
                        <Heading variant="h3" className="text-4xl">Naufal</Heading>
                    </div>
                    <Paragraph className="mb-4">I am an electrical engineering student who interested in backend development but also likes user interface.</Paragraph>
                    <div className="flex gap-3 text-3xl">
                        <Link href={"/"}><FiFileText /></Link>
                        <Link href={"/"}><FiGithub /></Link>
                        <Link href={"/"}><FiLinkedin /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;