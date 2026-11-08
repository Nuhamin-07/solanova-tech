import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
    return (
        <section id="services" aria-labelledby="services-heading" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0099cc]">What we do</p>
                    <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        Technology built around <span className="text-[#0099cc]">your business</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                        From the first idea to the next stage of growth, we create dependable digital products that solve real business challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
