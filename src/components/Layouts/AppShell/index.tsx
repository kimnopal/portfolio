import Footer from "@/components/Fragments/Footer";
import Navbar from "@/components/Fragments/Navbar";

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const { children } = props

    return (
        <div className="h-full min-h-screen w-full bg-gradient-to-tr from-slate-950 from-50% to-slate-900 text-slate-100">
            <Navbar />
            <main className="mx-auto w-full max-w-3xl flex flex-col pt-32 px-4 gap-8 text-slate-100 lg:max-w-4xl">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default AppShell;