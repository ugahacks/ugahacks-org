// import Image from "next/image";
import About from "./components/About";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="">
        </main>
      </div>
    </>
  );
}
