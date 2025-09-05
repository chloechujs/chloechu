import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-gray">
      <Header />
      <Hero />
      
      {/* WORKS Title Section */}
      <section className="w-full bg-primary-orange">
        <div className="flex justify-center">
          <h1 className="text-primary-gray font-bold font-mango text-[350px] leading-[350px]">
            WORKS
          </h1>
        </div>
      </section>
      
      <WorkSection />
    </main>
  );
}
