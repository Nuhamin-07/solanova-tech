"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Navbar() {
    const mobileMenuRef = useRef<HTMLDetailsElement>(null);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Why choose us", href: "/#why-us" },
        { label: "Projects", href: "/#portfolio" },
        { label: "Contact", href: "/contact" },
    ];

    function closeMobileMenu() {
        mobileMenuRef.current?.removeAttribute("open");
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <Image
                        src="/solanova-logo.png"
                        alt="Solanova Technologies"
                        width={200}
                        height={50}
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

                <details ref={mobileMenuRef} className="relative lg:hidden">
                    <summary aria-label="Open navigation menu" className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition hover:border-[#0099cc] hover:text-[#0099cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0099cc]">
                        <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
                            <span className="h-0.5 w-full rounded-full bg-current" />
                            <span className="h-0.5 w-full rounded-full bg-current" />
                            <span className="h-0.5 w-full rounded-full bg-current" />
                        </span>
                    </summary>
                    <nav aria-label="Mobile navigation" className="absolute right-0 top-14 z-50 flex min-w-56 flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} onClick={closeMobileMenu} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0099cc]">{link.label}</Link>
                        ))}
                        <div className="my-1 border-t border-slate-100" />
                        <Link href="/contact" onClick={closeMobileMenu} className="mt-1 rounded-lg bg-[#0099cc] px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0088b6]">
                            Request Consultation
                        </Link>
                    </nav>
                </details>

                {/* Desktop CTA Button */}
                <div className="hidden items-center gap-3 lg:flex">
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
