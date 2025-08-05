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
            <button className="splashbtn">Register for UGAHacks X!</button>
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
        }
        .laptop.left {
          width: 50%;
          height: 500px;
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
          color: #ff4b4b;
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
          background: #ff4b4b;
          color: #fff;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          margin-right: 1rem;
          cursor: pointer;
          font-weight: 500;
        }
      `}</style>

    </section>
  );
}
