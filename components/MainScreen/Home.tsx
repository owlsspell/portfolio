import Link from "next/link"
import { Circle } from "lucide-react"
import Image from "next/image";
import TechnologySwiper from "./Swiper";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0e1419] text-white overflow-hidden relative">
            {/* Navigation */}
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
                <Link href="/" className="text-[#4ecdc4] text-2xl font-bold">
                    Olena.dev._
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    <NavItem number="01" label="home" />
                    <NavItem number="02" label="expertise" />
                    <NavItem number="03" label="work" />
                    <NavItem number="04" label="experience" />
                    <NavItem number="05" label="contact" />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-20 md:pt-32 relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <h1 className="text-5xl md:text-8xl font-bold text-center tracking-tight text-white">Olena Arkhipova</h1>
                    <h2 className="font-serif text-xl md:text-2xl mt-4 text-center tracking-wide">
                        SOFTWARE ENGINEER, FRONTEND & BACKEND DEVELOPER.
                    </h2>

                    {/* Featured Section */}
                    <div className="mt-24 md:mt-32">
                        <TechnologySwiper />
                    </div>

                    <div className="mt-24 md:mt-32">
                        <p className="text-gray-400 mb-6 uppercase tracking-widest text-sm">As featured in</p>
                        <div className="flex flex-wrap items-center gap-8 opacity-70">
                            <div className="flex items-center">
                                <span className="text-3xl">&laquo;</span>
                                <span className="ml-1 text-xl">Featured</span>
                            </div>
                            <Image
                                src="/placeholder.svg?height=30&width=120"
                                alt="Hostinger"
                                width={120}
                                height={30}
                                className="h-8 w-auto object-contain"
                            />
                            <Image
                                src="/placeholder.svg?height=30&width=120"
                                alt="Upwork"
                                width={120}
                                height={30}
                                className="h-8 w-auto object-contain"
                            />
                            <Image
                                src="/placeholder.svg?height=30&width=150"
                                alt="CareerFoundry"
                                width={150}
                                height={30}
                                className="h-8 w-auto object-contain"
                            />
                            <div className="flex items-center">
                                <span className="mr-1">Frontend Mentor</span>
                                <span className="text-3xl">&raquo;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Image */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none z-0 opacity-80 bg-[url('/bg.jpg')] bg-cover bg-center h-screen w-screen">

            </div>

            {/* Loading indicator */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <Circle className="w-6 h-6 text-purple-500 animate-pulse" />
            </div>
        </main>
    )
}

function NavItem({ number, label }: { number: string; label: string }) {
    return (
        <Link href={`/${label === "home" ? "" : label}`} className="group">
            <div className="flex items-center">
                <span className="text-gray-500 mr-2">{number}</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">{label}</span>
            </div>
        </Link>
    )
}
