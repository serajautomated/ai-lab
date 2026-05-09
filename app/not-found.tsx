import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-8xl font-bold text-green-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-zinc-400 mb-8 text-center max-w-md">The page you are looking will be LIVE soon.</p>
            <Link href="/" className="bg-green-500 text-black font-bold px-6 py-3 rounded-full hover:bg-green-400 transition-colors">Go Home</Link>
        </div>
    );
}