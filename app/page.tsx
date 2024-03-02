import Image from "next/image";
import Navbar from "./components/Navbar";
import Carausal from "./components/Carausal";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Carausal/>
    </main>
  );
}
