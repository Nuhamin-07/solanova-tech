import Link from "next/link";

export default function ContactCta() {
    return (
        <section aria-labelledby="contact-cta-heading" className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-7 py-10 shadow-xl shadow-slate-900/10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-px w-2/3 bg-gradient-to-l from-cyan-400/70 to-transparent" />
                <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Let’s build what’s next</p>
                        <h2 id="contact-cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Have a project in mind?</h2>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">Tell us what you’re working toward. We’ll help you find a practical way to move forward.</p>
                    </div>
                    <Link
                        href="/contact"
                        className="group inline-flex min-h-12 shrink-0 items-center gap-3 rounded-xl bg-[#0099cc] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:bg-[#08a8dc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    >
                        Contact us
                    </Link>
                </div>
            </div>
        </section>
    );
}
