import { Heading } from ".";

type SectionHeadingProps = {
    children: React.ReactNode
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
    return (
        <Heading variant="h1" className="w-fit text-2xl mb-6 relative z-[10] before:block before:absolute before:-z-10 before:bottom-1 before:-left-3 before:h-full before:w-3/4 before:bg-gradient-to-r before:from-slate-800 before:-skew-y-3 before:-skew-x-6 md:mb-7">{children}</Heading>
    );
}

export default SectionHeading;