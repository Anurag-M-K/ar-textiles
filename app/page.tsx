import Image from "next/image";
import Navbar from "./components/Navbar";
import Carausal from "./components/Carausal";
import Category from "./components/Category";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Carausal/>
      <Category/>
    </main>
  );
}
