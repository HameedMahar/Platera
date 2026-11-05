import AboutUs from '@/components/AboutUs';

export const metadata = {
  title: 'About Us - PLATERA Team',
  description: 'Meet the executive leadership and engineering team behind PLATERA.',
};

export default function WorkingPage() {
  return (
    <main className="min-h-screen">
      <AboutUs />
    </main>
  );
}
