import Link from "next/link";
import { useState, useRef, useEffect, MouseEventHandler } from "react"
import navLink from "@/data/navLink.json"
import Button from "@/components/Elements/Button";
import { FiMenu, FiX } from "react-icons/fi"
import { motion } from "framer-motion"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const navLinksWrapper = useRef<HTMLDivElement>(null)

    const handleClickMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            if ((showMenu && !navLinksWrapper.current?.contains(e.target as Node))) {
                setShowMenu(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showMenu])

    const variants = {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.25,
                delayChildren: 0.25,
                staggerChildren: 0.2,
                staggerDirection: 1,
            },
        },
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.25,
            },
        },
    }

    const linkVariants = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-[999]">
            <nav className="w-full mx-auto p-4 md:max-w-3xl lg:max-w-4xl">
                <div className="w-full p-4 flex flex-col items-end backdrop-blur-xl bg-slate-100/5 rounded-lg shadow-lg">
                    <Button onClick={handleClickMenu} className="md:hidden"><FiMenu /></Button>
                    <motion.div
                        className={`flex flex-col space-y-8 px-6 py-8 w-4/5 h-screen absolute -top-4 -right-4 z-30 bg-gradient-to-tl from-slate-950 from-50% to-slate-900 
                    md:static md:!translate-x-0 md:!opacity-100 md:w-full md:h-full md:bg-none md:space-y-0 md:p-0 md:flex-row md:gap-10`
                        }
                        animate={showMenu ? "open" : "closed"}
                        variants={variants}
                        initial={false}
                        ref={navLinksWrapper}
                    >
                        {/* <div className={`${showMenu ? 'translate-x-0' : 'translate-x-full'} flex flex-col space-y-8 p-4 w-4/5 h-screen absolute top-0 right-0 z-20 bg-gradient-to-tl from-slate-950 from-50% to-slate-900`}> */}
                        <Button onClick={handleClickMenu} className="w-fit md:hidden"><FiX /></Button>
                        {navLink.map((link, i) => (
                            <motion.div
                                variants={linkVariants}
                                key={i}
                                className="md:!translate-x-0 md:!opacity-100"
                            >
                                <Link href={link.path} className="text-lg" onClick={handleClickMenu}>{link.name}</Link>
                            </motion.div>
                        ))}
                        {/* </div> */}
                    </motion.div>
                </div>
                <div className={`${showMenu
                    ? 'block' : 'hidden'} absolute left-0 top-0 h-screen w-full backdrop-blur-sm -z-10 md:hidden`}>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;