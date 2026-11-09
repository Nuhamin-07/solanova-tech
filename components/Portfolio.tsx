import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Portfolio() {
    return (
        <section id="portfolio" aria-labelledby="portfolio-heading" className="bg-slate-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0099cc]">Featured projects</p>
                        <h2 id="portfolio-heading" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Digital products for <span className="text-[#0099cc]">real work.</span></h2>
                        <p className="mt-5 text-base leading-7 text-slate-600">A look at the kinds of business platforms and customer experiences we can create with you.</p>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-md font-semibold text-[#008dbb] hover:text-[#006f94]">Discuss a project</Link>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="relative aspect-[1.55/1] overflow-hidden bg-slate-100">
                                <Image
                                    src={project.image.src}
                                    alt={project.image.alt}
                                    fill
                                    sizes="(min-width: 768px) 33vw, 90vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <p className="mb-3 text-xs font-bold tracking-[0.12em] text-[#008dbb]">{project.category}</p>
                                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
