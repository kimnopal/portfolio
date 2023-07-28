type ButtonProps = {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
    return (
        <button type="button" className={`bg-slate-800 focus:ring-2 focus:ring-primary-300 rounded-lg text-xl p-3 transition hover:bg-slate-700 ${className}`} {...rest}>
            {children}
        </button>
    );
}

export default Button;