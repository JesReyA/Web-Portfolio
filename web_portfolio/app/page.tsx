import dynamic from "next/dynamic";
import GalaxyHero from "@/components/galaxy"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <GalaxyHero />
    </main>
  );
}
