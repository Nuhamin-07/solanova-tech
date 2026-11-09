import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import ContactCta from "@/components/ContactCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <ContactCta />
    </main>
  );
}
