import Link from "next/link";

const Footer = () => {
    return (
        <footer className="">
            <div className="w-full mx-auto text-center text-sm text-slate-400 md:max-w-3xl lg:max-w-4xl">
                <div className="px-4 py-12 border-slate-700 border-t-[1px]">
                    <div className="mb-2">Made with <Link href="nextjs.org" target="_blank" className="underline">NextJS</Link> by Naufal Hakim</div>
                    <div>&copy; 2023 Naufal Hakim - All Rights Reserved</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;