import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-12 lg:py-20">
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

