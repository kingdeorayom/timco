import Banner from "@/components/home/Banner";
import Clients from "@/components/home/Clients";
import Ender from "@/components/home/Ender";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import MachinesEquipment from "@/components/home/MachinesEquipment";
import MissionVision from "@/components/home/MissionVision";
import Projects from "@/components/home/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Introduction />
      <MachinesEquipment />
      <Projects />
      <Banner />
      <MissionVision />
      <Ender />
    </>
  );
}
