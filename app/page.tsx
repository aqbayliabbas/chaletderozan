import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Accommodations from "@/components/sections/Accommodations";
import VideoSection from "@/components/sections/VideoSection";
import EcoEngagement from "@/components/sections/EcoEngagement";
import Testimonials from "@/components/sections/Testimonials";
import MapSection from "@/components/sections/MapSection";
import CreativeGallery from "@/components/sections/CreativeGallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar isLightBackground />
      <Hero />
      <Features />
      <Accommodations />
      <VideoSection />
      <EcoEngagement />
      <CreativeGallery />
      <Testimonials />
      <MapSection />

      {/* Newsletter Section */}
      <section className="py-40 bg-paper border-t border-ink/5">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold mb-10 block">LA CORRESPONDANCE</span>
            <h2 className="text-6xl font-serif text-ink italic mb-10 tracking-tighter">Éloge du partage.</h2>
            <p className="text-xl text-ink/60 font-serif font-light italic mb-14 leading-relaxed">
              "Inscrivez-vous pour recevoir les chroniques intemporelles du domaine et nos explorations alpines."
            </p>
            <form className="flex flex-col sm:flex-row gap-0 border border-ink/10 overflow-hidden shadow-2xl">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 bg-white px-10 py-6 text-ink placeholder:text-ink/20 focus:outline-none font-serif italic text-xl border-b sm:border-b-0 sm:border-r border-ink/10"
              />
              <button className="bg-rolex-green text-paper px-16 py-6 font-semibold hover:bg-rolex-green/95 transition-all uppercase text-[11px] tracking-[0.4em] shadow-inner">
                S'INSCRIRE
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
