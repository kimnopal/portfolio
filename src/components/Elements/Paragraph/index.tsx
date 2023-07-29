
type ParagraphProps = {
    children: React.ReactNode
    className?: string
}

const Paragraph = ({ children, className }: ParagraphProps) => {
    return (
        <p className={`text-base font-normal ${className}`}>{children}</p>
    );
}

export default Paragraph;