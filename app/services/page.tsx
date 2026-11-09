import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <section aria-labelledby="services-page-heading" className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">
                <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-44 h-[32rem] w-[32rem] rounded-full bg-cyan-100/70 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0099cc]">Our services</p>
                    <h1 id="services-page-heading" className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        Technology that works for <span className="text-[#0099cc]">your business.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        From purpose-built software to technical guidance, we help you choose a practical path and build solutions around the way your organization works.
                    </p>
                    <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0099cc] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0088b6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0099cc]">
                        Talk through your needs
                    </Link>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {services.map((service, index) => {
                    const reversed = index % 2 === 1;
                    return (
                        <section key={service.id} id={`service-${service.id}`} aria-labelledby={`service-heading-${service.id}`} className="py-16 sm:py-20 lg:py-24">
                            <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
                                <div className={reversed ? "lg:order-2" : ""}>
                                    <div className="relative flex aspect-[1.35/1] items-center justify-center overflow-hidden rounded-3xl  p-8 sm:p-12">
                                        <div aria-hidden="true" className="absolute h-48 w-48 rounded-full bg-white/70 blur-3xl" />
                                        <Image
                                            src={service.image.src}
                                            alt={service.image.alt}
                                            width={420}
                                            height={320}
                                            sizes="(min-width: 1024px) 45vw, 90vw"
                                            className="relative h-full w-full rounded-[10px] object-fit transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className={reversed ? "lg:order-1" : ""}>
                                    <h2 id={`service-heading-${service.id}`} className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">{service.title}</h2>
                                    <p className="mt-5 text-base leading-7 text-slate-600">{service.overview}</p>
                                    <ul className="mt-6 space-y-3">
                                        {service.capabilities.map((capability) => (
                                            <li key={capability} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                                                <span aria-hidden="true" className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xs font-bold text-[#008dbb]">✓</span>
                                                {capability}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            <section className="bg-slate-950 px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Have a project in mind?</p>
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Let’s find the right way forward.</h2>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#0099cc] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#08a8dc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
                        Contact our team
                    </Link>
                </div>
            </section>
        </main>
    );
}
