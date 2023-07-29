import Button from "@/components/Elements/Button";
import { Heading } from "@/components/Elements/Heading";
import SectionHeading from "@/components/Elements/Heading/SectionHeading";
import Paragraph from "@/components/Elements/Paragraph";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
    return (
        <section className="mb-12">
            <div className="flex flex-col">
                <SectionHeading>Latest Project</SectionHeading>
                <div className="grid grid-cols-1 gap-10 mb-10 sm:grid-cols-2 md:gap-6">
                    <Link href="/project" className="transition group hover:scale-[103%]">
                        <div className="aspect-video rounded-lg overflow-hidden mb-2">
                            <img src="/images/project/dbyte.png" />
                        </div>
                        <div>
                            <Heading variant="h3" className="text-xl mb-1">Dbyte</Heading>
                            <Paragraph className="mb-1">Forum website as a place for student discussion</Paragraph>
                            <div className="text-base font-normal text-slate-400 flex items-center gap-2 group-hover:underline">
                                See more{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="bi bi-box-arrow-up-right w-4"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </Link>
                    <Link href="/project" className="transition group hover:scale-[103%]">
                        <div className="aspect-video rounded-lg overflow-hidden mb-2">
                            <img src="/images/project/dbyte.png" />
                        </div>
                        <div>
                            <Heading variant="h3" className="text-xl mb-1">Dbyte</Heading>
                            <Paragraph className="mb-1">Forum website as a place for student discussion</Paragraph>
                            <div className="text-base font-normal text-slate-400 flex items-center gap-2 group-hover:underline">
                                See more{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="bi bi-box-arrow-up-right w-4"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </Link>
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

export default Project;