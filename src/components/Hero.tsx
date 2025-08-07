'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

/**
 * Hero component recreates the UGAHacks hero section with rotating keywords.
 */
export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const options = {
      strings: ['Create.', 'Inspire.', 'Code.'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed(typedRef.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <section className="header">

      <div className="mlh-trust-badge">
         <a
           href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
           target="_blank"
           rel="noopener noreferrer"
         >
           <img
             src="/mlh-trust-badge-2026-white.svg"
             alt="Major League Hacking 2026 Hackathon Season"
             className="mlh-badge-img"
           />

         </a>
      </div>

      <div className="laptop left"></div>
      <img id="laptopmobile" src="/laptop.svg" alt="Laptop" />
      <div className="inspiration right">
        <h1>
          Boot up your dreams.
          <br />
          <span className="txt-rotate">
            <span ref={typedRef} className="wrap"></span>
          </span>
        </h1>
        <div className="btn-container">
          <a data-link="about">
            <button className="splashbtn">Learn more about UGAHacks</button>
          </a>
          <a href="https://mybyte.ugahacks.com/login">
            <button className="splashbtn">Register for UGAHacks 11!</button>
          </a>
        </div>
      </div>


      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4rem 2rem;
          background: #1e1f29;
          color: #e1e1f7;
          position: relative;
        }

        .mlh-trust-badge {
          position: absolute;
          top: 0;
          right: 20px;
          z-index: 10;
        }

        .mlh-badge-img {
          width: 100px;
          height: auto;
          display: block;
        }


        .laptop.left {
          width: 60%;
          height: 600px;
          background: url('/laptop.svg') no-repeat center;
          background-size: contain;
        }
        #laptopmobile {
          display: none;
        }
        .inspiration.right {
          width: 50%;
          max-width: 500px;
          text-align: left;
        }
        h1 {
          font-size: 3rem;
          font-weight: 300;
          margin: 0;
          color: #bbbbbf;
        }
        .txt-rotate .wrap {
          font-weight: 700;
          color: #cc3333;
        }
        .btn-container {
            display: flex;
            align-items: center;
            margin-top: 2rem;
          }
          .splashbtn + .splashbtn {
            margin-left: auto;  /* targets the second button */
          }
        .splashbtn {
          background: #cc3333;
          color: #fff;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          margin-right: 1rem;
          cursor: pointer;
          font-weight: 500;
        }

        @media (max-width: 768px) {
            .mlh-badge-img {
                width: 80px;
            }
        }

        @media (max-width: 480px) {
            .mlh-badge-img {
               width: 70px;
            }
        }
      `}</style>

    </section>
  );
}
