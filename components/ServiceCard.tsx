import Image from "next/image";

export default function ServiceCard({
    title,
    description,
    image,
}: {
    title: string;
    description: string;
    image: string;
}) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-6">
            <div className="relative mb-6 flex aspect-[1.55/1] items-center justify-center overflow-hidden rounded-xl p-0">
                <div aria-hidden="true" className="absolute h-28 w-28 rounded-full bg-white/70 blur-2xl" />
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                />
            </div>
            <h3 className="text-md font-bold leading-snug text-slate-950 sm:text-xl">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
        </article>
    );
}
