"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type ContactFormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactSection() {
    const [status, setStatus] = useState("");
    const form = useForm<ContactFormValues>({
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    function handleValidSubmit(values: ContactFormValues) {
        setStatus(`Thanks, ${values.name.trim()}!`);
        form.reset();
    }

    const fieldClass = "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0099cc] focus:ring-2 focus:ring-cyan-100 aria-invalid:border-red-500 aria-invalid:focus:border-red-500 aria-invalid:focus:ring-red-100";

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
                        <div className="mt-10 pt-7">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Where we work</p>
                            <p className="mt-3 text-base font-medium">Ethiopia and across Africa</p>
                            <p className="mt-2 text-sm leading-6 text-slate-300">We partner with businesses to build software, ERP systems, web and mobile applications, and technical solutions.</p>
                        </div>
                        <div className="mt-8 rounded-2xl border border-slate-700 bg-white/5 p-5">
                            <p className="text-sm font-semibold">Not sure where to start?</p>
                            <p className="mt-2 text-sm leading-6 text-slate-300">A short description of the challenge is enough to begin.</p>
                        </div>
                    </aside>

                    <Form {...form}>
                        <form noValidate onSubmit={form.handleSubmit(handleValidSubmit)} className="p-7 sm:p-10 lg:p-12">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    rules={{
                                        required: "Please enter your name.",
                                        validate: (value) => value.trim().length > 0 || "Please enter your name.",
                                    }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name <span className="text-[#008dbb]">*</span></FormLabel>
                                            <FormControl><input {...field} autoComplete="name" placeholder="John Doe" className={fieldClass} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    rules={{
                                        required: "Please enter your email address.",
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
                                    }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email <span className="text-[#008dbb]">*</span></FormLabel>
                                            <FormControl><input {...field} type="email" autoComplete="email" placeholder="john@gmail.com" className={fieldClass} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="subject"
                                rules={{
                                    required: "Please add a subject.",
                                    validate: (value) => value.trim().length > 0 || "Please add a subject.",
                                }}
                                render={({ field }) => (
                                    <FormItem className="mt-5">
                                        <FormLabel>Subject <span className="text-[#008dbb]">*</span></FormLabel>
                                        <FormControl><input {...field} placeholder="What would you like to discuss?" className={fieldClass} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                rules={{
                                    required: "Please tell us a little about your project.",
                                    validate: (value) => {
                                        const message = value.trim();
                                        if (!message) return "Please tell us a little about your project.";
                                        return message.length >= 20 || "Please add a little more detail (at least 20 characters).";
                                    },
                                }}
                                render={({ field }) => (
                                    <FormItem className="mt-5">
                                        <FormLabel>Message <span className="text-[#008dbb]">*</span></FormLabel>
                                        <FormControl><textarea {...field} rows={5} placeholder="Tell us about your project, goals, or challenge..." className={`${fieldClass} resize-y`} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#0099cc] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0088b6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0099cc]">
                                    Send your message
                                </button>
                                <p aria-live="polite" className="text-sm text-slate-600">{status}</p>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
