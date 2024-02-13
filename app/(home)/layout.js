import Navbar from "../components/Navbar";



export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-32 lg:py-16">
                    <h1 className=" text-2xl md:text-3xl font-bold tracking-tight text-zinc-950">Dashboard</h1>
                </div>
            </header>
            {children}
        </>
    );
}
