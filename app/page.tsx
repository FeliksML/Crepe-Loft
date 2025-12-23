import { Header } from '@/components/crepeloft/Header';
import { Hero } from '@/components/crepeloft/Hero';
import { StorySection } from '@/components/crepeloft/StorySection';
import { SignatureSection } from '@/components/crepeloft/SignatureSection';
import { Footer } from '@/components/crepeloft/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-secondary-100 dark:bg-[#120B0D]">
      <Header />
      <main>
        <Hero />
        <StorySection />
        <SignatureSection />
      </main>
      <Footer />
    </div>
  );
}
