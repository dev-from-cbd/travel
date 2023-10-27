// Import components for the home page from their respective modules
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

// Define the default function 'Home' for the home page
export default function Home() {
  // Return a fragment containing the components in the desired order
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
