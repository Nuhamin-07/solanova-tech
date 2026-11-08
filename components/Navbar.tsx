"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SolanovaSwirlIcon } from "./Hero";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <Image
                        src="/solanova-logo.png"
                        alt="Solanova Technologies"
                        width={180}
                        height={45}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`relative py-1 text-sm font-medium transition-colors ${isActive
                                    ? "text-[#0099cc] font-semibold"
                                    : "text-slate-700 hover:text-[#0099cc]"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#0099cc]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right CTA Button */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="rounded-lg bg-[#0099cc] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0088b6] hover:shadow active:scale-[0.98]"
                    >
                        Request Consultation
                    </Link>
                </div>
            </div>
        </header>
    );
}
