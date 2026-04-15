import dynamic from "next/dynamic";
import GalaxyHero from "@/components/galaxy"
import About from "@/components/about"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <GalaxyHero />
      <About />
    </main>
  );
}
