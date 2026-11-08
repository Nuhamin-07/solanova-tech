"use client";

import { useState, type FormEvent } from "react";

type FormField = "name" | "email" | "subject" | "message";
type FormErrors = Partial<Record<FormField, string>>;

export default function ContactSection() {
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const subject = String(formData.get("subject") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();
        const nextErrors: FormErrors = {};

        if (!name) nextErrors.name = "Please enter your name.";
        if (!email) nextErrors.email = "Please enter your email address.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
        if (!subject) nextErrors.subject = "Please add a subject.";
        if (!message) nextErrors.message = "Please tell us a little about your project.";
        else if (message.length < 20) nextErrors.message = "Please add a little more detail (at least 20 characters).";

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            setStatus("Please review the highlighted fields.");
            return;
        }

        setStatus(`Thanks, ${name}. Your message passed validation. This form is ready to connect to an email service.`);
        form.reset();
    }

    function clearError(field: FormField) {
        setErrors((current) => {
            if (!current[field]) return current;
            const next = { ...current };
            delete next[field];
            return next;
        });
        setStatus("");
    }

    const fieldClass = "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0099cc] focus:ring-2 focus:ring-cyan-100";

    return (
        <section id="contact" aria-labelledby="contact-heading" className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0099cc]">Contact</p>
                    <h2 id="contact-heading" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Let’s talk about <span className="text-[#0099cc]">what’s next.</span></h2>
                    <p className="mt-5 text-base leading-7 text-slate-600">Share a little about your idea or challenge. We’ll help you think through a practical next step.</p>
                </div>

                <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
                    <aside className="bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
                        <h3 className="text-2xl font-semibold">Start a conversation</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-300">Tell us what your business is working toward. We’ll explore how technology can help.</p>
                        <div className="mt-10 border-t border-slate-700 pt-7">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Where we work</p>
                            <p className="mt-3 text-base font-medium">Ethiopia and across Africa</p>
                            <p className="mt-2 text-sm leading-6 text-slate-300">We partner with businesses to build software, ERP systems, web and mobile applications, and technical solutions.</p>
                        </div>
                        <div className="mt-8 rounded-2xl border border-slate-700 bg-white/5 p-5">
                            <p className="text-sm font-semibold">Not sure where to start?</p>
                            <p className="mt-2 text-sm leading-6 text-slate-300">A short description of the challenge is enough to begin.</p>
                        </div>
                    </aside>

                    <form noValidate onSubmit={handleSubmit} className="p-7 sm:p-10 lg:p-12">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="contact-name" className="text-sm font-semibold text-slate-800">Name <span className="text-[#008dbb]">*</span></label>
                                <input id="contact-name" name="name" autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} onChange={() => clearError("name")} className={`${fieldClass} ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`} placeholder="Your name" />
                                {errors.name && <p id="contact-name-error" className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="text-sm font-semibold text-slate-800">Email <span className="text-[#008dbb]">*</span></label>
                                <input id="contact-email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} onChange={() => clearError("email")} className={`${fieldClass} ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`} placeholder="you@company.com" />
                                {errors.email && <p id="contact-email-error" className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="contact-subject" className="text-sm font-semibold text-slate-800">Subject <span className="text-[#008dbb]">*</span></label>
                            <input id="contact-subject" name="subject" required aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "contact-subject-error" : undefined} onChange={() => clearError("subject")} className={`${fieldClass} ${errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`} placeholder="What would you like to discuss?" />
                            {errors.subject && <p id="contact-subject-error" className="mt-1.5 text-sm text-red-600">{errors.subject}</p>}
                        </div>
                        <div className="mt-5">
                            <label htmlFor="contact-message" className="text-sm font-semibold text-slate-800">Message <span className="text-[#008dbb]">*</span></label>
                            <textarea id="contact-message" name="message" rows={5} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} onChange={() => clearError("message")} className={`${fieldClass} resize-y ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`} placeholder="Tell us about your project, goals, or challenge..." />
                            {errors.message && <p id="contact-message-error" className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
                        </div>
                        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#0099cc] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0088b6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0099cc]">
                                Send your message <span aria-hidden="true">→</span>
                            </button>
                            <p aria-live="polite" className={`text-sm ${Object.keys(errors).length ? "text-red-600" : "text-slate-600"}`}>{status}</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
