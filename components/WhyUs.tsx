import { reasons } from "@/data/why-us";

export default function WhyUs() {
    return (
        <section id="why-us" aria-labelledby="why-us-heading" className="bg-white py-20 sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
                <div className="lg:sticky lg:top-32 lg:self-start">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0099cc]">Why choose us</p>
                    <h2 id="why-us-heading" className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        A technology partner that <span className="text-[#0099cc]">gets your business.</span>
                    </h2>
                    <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                        Good software starts with understanding the people and processes behind it. We bring that understanding into every stage of the work.
                    </p>
                </div>
                <div className="divide-y divide-slate-200 border-y border-slate-200">
                    {reasons.map((reason) => (
                        <article key={reason.id} className="grid gap-3 py-6 sm:grid-cols-[64px_1fr] sm:gap-5 sm:py-7 items-center">
                            <span className="font-semibold tracking-wider text-[#0099cc]">{reason.id}</span>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">{reason.title}</h3>
                                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">{reason.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
