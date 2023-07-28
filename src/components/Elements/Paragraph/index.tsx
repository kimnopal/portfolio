
type ParagraphProps = {
    children: React.ReactNode
    className: string
}

const Paragraph = ({ children, className }: ParagraphProps) => {
    return (
        <p className={`text-lg font-normal ${className}`}>{children}</p>
    );
}

export default Paragraph;