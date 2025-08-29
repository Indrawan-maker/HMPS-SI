import Hero from "./components/Hero";
import History from "./components/History";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-gray-100">
    <Hero />
    <History />
    <Footer />
    </main>
  );
}
