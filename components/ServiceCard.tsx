import Image from "next/image";
import type { ServiceCardProps } from "@/data/services";

export default function ServiceCard({ service }: ServiceCardProps) {
    const cardClasses = "sm:p-5";

    return (
        <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-900/5 ${cardClasses}`}>
            <div className={`relative mb-5 flex items-center justify-center overflow-hidden rounded-xl`}>
                <div aria-hidden="true" className="absolute h-32 w-32 rounded-full bg-white/70 blur-2xl" />
                <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={200}
                    height={200}
                    sizes={"(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"}
                    className="relative h-full w-full rounded-md object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <h3 className={`font-bold leading-snug text-slate-950 text-lg sm:text-xl`}>
                {service.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{service.description}</p>
        </article>
    );
}
