"use client";

import Image from "next/image";
import Link from "next/link";

export function SolanovaSwirlIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
            {/* Outer upper swirl dots */}
            <circle cx="22" cy="7" r="2.8" fill="#0099cc" />
            <circle cx="16" cy="9" r="2.5" fill="#0099cc" />
            <circle cx="11" cy="13" r="2.2" fill="#00a3e0" />
            <circle cx="8" cy="19" r="2.0" fill="#00a3e0" />
            <circle cx="9" cy="25" r="1.8" fill="#38bdf8" />
            <circle cx="13" cy="30" r="1.6" fill="#38bdf8" />
            {/* Center spiral */}
            <circle cx="18" cy="31" r="1.5" fill="#38bdf8" />
            <circle cx="23" cy="29" r="1.4" fill="#0099cc" />
            <circle cx="26" cy="25" r="1.3" fill="#0099cc" />
            <circle cx="25" cy="20" r="1.2" fill="#0099cc" />
            <circle cx="22" cy="17" r="1.2" fill="#0099cc" />
            <circle cx="18" cy="18" r="1.1" fill="#38bdf8" />
            <circle cx="17" cy="22" r="1.1" fill="#38bdf8" />
            <circle cx="20" cy="24" r="1.0" fill="#0099cc" />
            {/* Outer lower swirl dots */}
            <circle cx="22" cy="37" r="2.8" fill="#0099cc" />
            <circle cx="28" cy="35" r="2.5" fill="#0099cc" />
            <circle cx="33" cy="31" r="2.2" fill="#00a3e0" />
            <circle cx="36" cy="25" r="2.0" fill="#00a3e0" />
            <circle cx="35" cy="19" r="1.8" fill="#38bdf8" />
            <circle cx="31" cy="14" r="1.6" fill="#38bdf8" />
        </svg>
    );
}

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-12 lg:py-20">
            {/* Subtle radial cyan light aura behind the mockups */}
            {/* <div
                className="pointer-events-none absolute right-[-100px] top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full" style={{
                    background:
                        "radial-gradient(circle at 60% 50%, rgba(56, 189, 248, 0.16) 0%, rgba(0, 153, 204, 0.08) 40%, transparent 70%)",
                }}
            /> */}

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column: Heading, Subtitle & Buttons */}
                    <div className="flex flex-col items-start justify-center lg:col-span-6 z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black tracking-tight text-slate-950 leading-[1.08]">
                            Software that <br />
                            <span className="text-[#0099cc] block mt-1">moves your</span>
                            <span className="text-[#0099cc] block">business forward.</span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg lg:text-[19px] text-slate-600 font-normal leading-relaxed max-w-lg">
                            We build custom software, ERP solutions, and web and mobile
                            applications for businesses in Ethiopia and across Africa.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 rounded-lg bg-[#0099cc] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#0088b6] hover:shadow active:scale-[0.98]"
                            >
                                <span>Discuss your project</span>
                                <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center rounded-lg border-2 border-slate-900 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 active:scale-[0.98]"
                            >
                                Explore our work
                            </Link>
                        </div>
                    </div>
                    {/* Right Column: Hero Image */}
                    <div className="relative flex w-full items-center justify-center lg:col-span-6">
                        <Image
                            src="/hero.jpg"
                            alt="Technology solutions illustration"
                            width={600}
                            height={600}
                            priority
                            className="h-auto w-full max-w-[600px] object-contain rounded-[10px]"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}

