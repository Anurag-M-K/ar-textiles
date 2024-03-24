import Image from "next/image";
import Navbar from "./components/Navbar";
import Carausal from "./components/Carausal";
import Category from "./components/Category";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Carausal/>
      <Category/>
      <Footer/>
    </main>
  );
}
