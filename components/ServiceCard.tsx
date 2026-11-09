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
        <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-5 `}>
            <div className={`relative mb-5 flex items-center justify-center overflow-hidden rounded-xl " : "aspect-[2.1/1] p-3 sm:p-5"}`}>
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="relative h-full w-full rounded-[5px] object-fit transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <h3 className={`font-bold leading-snug text-slate-950 text-md sm:text-xl`}>{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
        </article>
    );
}
