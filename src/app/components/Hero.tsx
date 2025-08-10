'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ['Create.', 'Inspire.', 'Code.'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="bg-gray-900 text-gray-100 px-6 py-16 md:py-24 font-raleway">
      {/* Layout Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Laptop Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/laptop.svg"
            alt="Laptop"
            width={600}
            height={600}
            className="max-w-xs sm:max-w-sm md:max-w-full h-auto"
            priority
          />
        </div>

        {/* Text + Buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-300">
            Boot up your dreams.
            <br />
            <span className="font-bold text-red-500">
              <span ref={typedRef}></span>
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex mt-10 flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link href="/#about" passHref>
              <button className="px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition">
                Learn more about UGAHacks
              </button>
            </Link>

            <div className="sm:ml-auto">
              <Link href="https://mybyte.ugahacks.com/login" passHref>
                <button className="px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition">
                  Register for UGAHacks 11!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
