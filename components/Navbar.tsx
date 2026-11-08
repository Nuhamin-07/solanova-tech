import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between px-8 py-2 sticky top-0 z-50 w-full">
            <div className="flex items-center gap-2">
                <Image src="/solanova-logo.png" alt="Solanova Tech" width={200} height={50} className="bg-transparent" />
            </div>
            <div className="flex items-center justify-around w-[20%]">
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
}