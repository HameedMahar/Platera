import AboutUs from '@/components/AboutUs';

export const metadata = {
  title: 'About Us | Our Team - PLATERA',
  description: 'Meet the executive leadership and culinary technology team behind PLATERA.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutUs />
    </main>
  );
}
