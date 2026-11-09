import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    { label: "Services", href: "/services" },
    { label: "Why choose us", href: "/#why-us" },
    { label: "Featured projects", href: "/#portfolio" },
    { label: "Contact", href: "/contact" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-10 border-b border-slate-800 pb-10 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-sm">
                        <Link href="/" className="inline-flex rounded bg-white px-2 py-1">
                            <Image src="/solanova-logo.png" alt="Solanova Technologies" width={180} height={45} className="h-9 w-auto object-contain" />
                        </Link>
                        <p className="mt-4 text-sm leading-6 text-slate-400">Thoughtful software and technology solutions for businesses in Ethiopia and across Africa.</p>
                    </div>
                    <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3">
                        {footerLinks.map((link) => <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">{link.label}</Link>)}
                    </nav>
                </div>
                <div className="flex flex-col gap-2 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {currentYear} Solanova Technologies. All rights reserved.</p>
                    <p>Building technology that moves business forward.</p>
                </div>
            </div>
        </footer>
    );
}
