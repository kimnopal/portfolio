import { Heading } from "@/components/Elements/Heading";
import SectionHeading from "@/components/Elements/Heading/SectionHeading";
import Paragraph from "@/components/Elements/Paragraph";
import Link from "next/link";

const Blog = () => {
    return (
        <section className="mb-12">
            <div className="flex flex-col">
                <SectionHeading>Latest Article</SectionHeading>
                <div className="grid grid-cols-1 gap-10 mb-10 md:grid-cols-2 md:gap-6">
                    <div className="transition hover:scale-[103%]">
                        <Link href={"/blog"} className="group">
                            <div className="text-slate-400 mb-2">29 Juni 2023</div>
                            <Heading variant="h3" className="text-2xl mb-1 transition group-hover:underline">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt facere, doloribus.</Heading>
                            <Paragraph className="mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aliquam eaque quidem, praesentium distinctio quod sint beatae</Paragraph>
                        </Link>
                        <div className="flex gap-2">
                            <Link href={"/"} className="text-slate-400 hover:underline">#Tag 1</Link>
                            <Link href={"/"} className="text-slate-400 hover:underline">#Tag 2</Link>
                        </div>
                    </div>
                    <div className="transition group hover:scale-[103%]">
                        <Link href={"/blog"}>
                            <div className="text-slate-400 mb-2">29 Juni 2023</div>
                            <Heading variant="h3" className="text-2xl mb-1 transition group-hover:underline">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt facere, doloribus.</Heading>
                            <Paragraph className="mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aliquam eaque quidem, praesentium distinctio quod sint beatae</Paragraph>
                        </Link>
                        <div className="flex gap-2">
                            <Link href={"/"} className="text-slate-400 hover:underline">#Tag 1</Link>
                            <Link href={"/"} className="text-slate-400 hover:underline">#Tag 2</Link>
                        </div>
                    </div>
                </div>
                <Link href={"/"} className="text-base font-semibold self-center flex whitespace-nowrap items-center group relative after:block after:w-0 after:h-[1px] after:absolute after:-bottom-1 after:bg-slate-100 after:transition-all after:duration-500  hover:after:w-full md:text-lg">
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right w-5 md:w-6 transition  translate-x-2 group-hover:translate-x-4" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}

export default Blog;