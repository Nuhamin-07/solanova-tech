import Link from "next/link";

const projects = [
    { title: "Connected business operations", category: "ERP and business systems", type: "erp" },
    { title: "A better customer experience", category: "Web and mobile platforms", type: "mobile" },
    { title: "Decisions with better data", category: "Custom software and analytics", type: "analytics" },
];

function ProjectVisual({ type }: { type: string }) {
    if (type === "mobile") {
        return (
            <div aria-hidden="true" className="flex h-56 items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-cyan-50 to-slate-100">
                <div className="w-32 rounded-[1.5rem] border-[5px] border-slate-900 bg-white p-2 shadow-xl">
                    <div className="h-2 w-9 rounded-full bg-slate-900 mx-auto" />
                    <div className="mt-3 rounded-xl bg-cyan-50 p-3"><div className="h-2 w-14 rounded bg-cyan-600" /><div className="mt-2 h-2 w-20 rounded bg-slate-200" /></div>
                    <div className="mt-3 grid grid-cols-2 gap-2"><div className="h-12 rounded-lg bg-slate-100" /><div className="h-12 rounded-lg bg-sky-100" /><div className="h-12 rounded-lg bg-slate-100" /><div className="h-12 rounded-lg bg-slate-100" /></div>
                    <div className="mt-3 h-2 rounded bg-slate-200" />
                </div>
            </div>
        );
    }

    if (type === "analytics") {
        return (
            <div aria-hidden="true" className="h-56 overflow-hidden rounded-t-2xl bg-gradient-to-br from-slate-100 to-cyan-50 p-6">
                <div className="mx-auto max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                    <div className="flex items-center justify-between"><div className="h-2.5 w-28 rounded bg-slate-800" /><div className="h-5 w-14 rounded bg-cyan-50" /></div>
                    <div className="mt-5 grid grid-cols-3 gap-2"><div className="h-12 rounded-lg bg-slate-50 p-2"><div className="h-1.5 w-8 rounded bg-slate-200" /><div className="mt-2 h-2 w-10 rounded bg-cyan-600" /></div><div className="h-12 rounded-lg bg-slate-50 p-2"><div className="h-1.5 w-8 rounded bg-slate-200" /><div className="mt-2 h-2 w-10 rounded bg-slate-700" /></div><div className="h-12 rounded-lg bg-slate-50 p-2"><div className="h-1.5 w-8 rounded bg-slate-200" /><div className="mt-2 h-2 w-10 rounded bg-cyan-600" /></div></div>
                    <div className="mt-4 flex h-20 items-end gap-2 rounded-lg bg-slate-50 px-3 pt-3"><div className="h-7 flex-1 rounded-t bg-cyan-200" /><div className="h-11 flex-1 rounded-t bg-cyan-400" /><div className="h-8 flex-1 rounded-t bg-cyan-300" /><div className="h-14 flex-1 rounded-t bg-cyan-600" /><div className="h-10 flex-1 rounded-t bg-cyan-400" /><div className="h-16 flex-1 rounded-t bg-slate-800" /></div>
                </div>
            </div>
        );
    }

    return (
        <div aria-hidden="true" className="h-56 overflow-hidden rounded-t-2xl bg-gradient-to-br from-cyan-50 to-slate-100 p-6">
            <div className="mx-auto flex h-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <div className="w-14 bg-slate-900 p-3"><div className="h-5 w-5 rounded-md bg-cyan-400" /><div className="mt-5 space-y-3"><div className="h-1.5 rounded bg-slate-600" /><div className="h-1.5 rounded bg-cyan-400" /><div className="h-1.5 rounded bg-slate-600" /><div className="h-1.5 rounded bg-slate-600" /></div></div>
                <div className="flex-1 p-4"><div className="h-2.5 w-28 rounded bg-slate-800" /><div className="mt-3 h-1.5 w-40 rounded bg-slate-200" /><div className="mt-5 grid grid-cols-3 gap-2"><div className="h-10 rounded bg-cyan-50" /><div className="h-10 rounded bg-slate-50" /><div className="h-10 rounded bg-slate-50" /></div><div className="mt-3 space-y-2"><div className="h-7 rounded border border-slate-100 bg-white" /><div className="h-7 rounded border border-slate-100 bg-white" /><div className="h-7 rounded border border-slate-100 bg-white" /></div></div>
            </div>
        </div>
    );
}

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
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#008dbb] hover:text-[#006f94]">Discuss a project <span aria-hidden="true">→</span></Link>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.type} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <ProjectVisual type={project.type} />
                            <div className="p-6">
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#008dbb]">{project.category}</p>
                                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">A tailored digital solution designed around business needs, customer experience, and room to grow.</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
