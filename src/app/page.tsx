'use client';

// import Image from "next/image";
import Image from "next/image";
import About from "./components/About";
import Hero from './components/Hero';
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <a
        id="mlh-trust-badge"
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '60px',
          position: 'fixed',
          right: '50px',
          top: 60,
          width: '10%',
          zIndex: 10,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season" width="100" height="100"
          style={{ width: '100%' }}
        />
      </a>
      <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <main className="">
        </main>
      </div>
    </>
  );
}

