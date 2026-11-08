"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "Why choose us", href: "/#why-us" },
        { label: "Projects", href: "/#portfolio" },
        { label: "Contact", href: "/#contact" },
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
                <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => {
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="py-1 text-sm font-medium text-slate-700 transition-colors hover:text-[#0099cc]"
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <details className="relative lg:hidden">
                    <summary className="cursor-pointer list-none rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800">Menu</summary>
                    <nav aria-label="Mobile navigation" className="absolute right-0 top-12 z-50 flex min-w-48 flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0099cc]">{link.label}</Link>
                        ))}
                    </nav>
                </details>

                {/* Right CTA Button */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/#contact"
                        className="rounded-lg bg-[#0099cc] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0088b6] hover:shadow active:scale-[0.98]"
                    >
                        Request Consultation
                    </Link>
                </div>
            </div>
        </header>
    );
}
