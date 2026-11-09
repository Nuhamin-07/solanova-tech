"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
    { label: "Home", href: "/", key: "home" },
    { label: "Services", href: "/services", key: "services" },
    { label: "Why choose us", href: "/#why-us", key: "why-us" },
    { label: "Projects", href: "/#portfolio", key: "projects" },
    { label: "Contact", href: "/contact", key: "contact" },
];

const sectionNavKeys: Record<string, string> = {
    services: "services",
    "why-us": "why-us",
    portfolio: "projects",
    "contact-cta": "contact",
};

export default function Navbar() {
    const mobileMenuRef = useRef<HTMLDetailsElement>(null);
    const pathname = usePathname();
    const [activeKey, setActiveKey] = useState<string | null>(null);

    useEffect(() => {
        const isHome = pathname === "/";
        const currentHash = window.location.hash.replace("#", "");
        const routeKey = pathname === "/services" ? "services" : pathname === "/contact" ? "contact" : "home";

        setActiveKey(isHome ? sectionNavKeys[currentHash] ?? "home" : routeKey);

        if (!isHome) return;

        const sections = Object.keys(sectionNavKeys)
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
                const currentSection = visibleSections[0];

                if (currentSection) {
                    setActiveKey(sectionNavKeys[currentSection.target.id]);
                }
            },
            { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
        );

        sections.forEach((section) => observer.observe(section));

        function handleHashChange() {
            const hash = window.location.hash.replace("#", "");
            setActiveKey(sectionNavKeys[hash] ?? "home");
        }

        function handleScroll() {
            if (window.scrollY < 100 && !window.location.hash) setActiveKey("home");
        }

        window.addEventListener("hashchange", handleHashChange);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("hashchange", handleHashChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

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
                        const isActive = activeKey === link.key;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`border-b-2 py-2 text-sm font-medium transition-colors ${isActive ? "border-[#0099cc] text-[#0099cc]" : "border-transparent text-slate-700 hover:border-[#0099cc] hover:text-[#0099cc]"}`}
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
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={closeMobileMenu}
                                aria-current={activeKey === link.key ? "page" : undefined}
                                className={`rounded-r-lg border-l-2 px-3 py-2.5 text-sm font-medium transition-colors ${activeKey === link.key ? "border-[#0099cc] bg-cyan-50 text-[#0099cc]" : "border-transparent text-slate-700 hover:bg-slate-50 hover:text-[#0099cc]"}`}
                            >
                                {link.label}
                            </Link>
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
