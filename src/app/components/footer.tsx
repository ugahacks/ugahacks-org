'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

export default function Footer() {
    const year = new Date().getFullYear();

    const handleBackToTop = useCallback(() => {
        window?.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <footer className="relative border-t border-white/10 bg-neutral-950 text-neutral-300">
            {/* top glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-8 left-0 right-0 h-8 bg-gradient-to-b from-red-500/20 to-transparent"
            />

            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
                    {/* Brand / blurb */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            {/* Replace with your logo path */}
                            <Image
                                src="/bytehacks11.png"
                                alt="UGAHacks"
                                width={36}
                                height={36}
                                className="h-9 w-9"
                                priority
                            />
                            <span className="text-lg font-semibold tracking-wide text-white">
                                UGAHacks
                            </span>
                        </div>
                        <p className="mt-4 max-w-prose text-sm text-neutral-400">
                            A student-run hackathon at the University of Georgia bringing
                            builders together to learn, ship, and make friends.
                        </p>
                    </div>

                    {/* Quick links */}
                    <NavColumn
                        title="Explore"
                        links={[
                            { href: '/#about', label: 'About' },
                            // { href: '/#schedule', label: 'Schedule' },
                            // { href: '/#faq', label: 'FAQ' },
                            // { href: '/#sponsors', label: 'Sponsors' },
                        ]}
                    />

                    <NavColumn
                        title="Resources"
                        links={[
                            // { href: '/code-of-conduct', label: 'Code of Conduct' },
                            { href: 'https://devpost.com/ugahacks', label: 'Devpost' },
                            { href: 'https://ugahacksel.notion.site/UGAHacks-Experiential-Learning-Credit-Guidelines-131de0003a758090bf6dc75f8773353c', label: 'EL Credit' },
                            { href: '/contact', label: 'Contact' },
                        ]}
                    />

                    {/* Newsletter stub – connect later */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wide text-white">Stay in the loop</h3>
                        <p className="mt-3 text-sm text-neutral-400">
                            Get updates on registration, workshops, and sponsor events on our socials!
                        </p>
                        
                        {/* Socials */}
                        <div className="mt-4 flex items-center gap-4">
                            <SocialLink href="https://github.com/UGAHacks" label="GitHub">
                                {/* GitHub */}
                                <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-5 w-5 fill-current">
                                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.44 11.44 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.25 2.94.12 3.25.78.84 1.25 1.91 1.25 3.22 0 4.6-2.8 5.61-5.47 5.91.43.37.81 1.1.81 2.22v3.29c0 .33.22.7.83.58A12 12 0 0 0 12 .5Z" />
                                </svg>
                            </SocialLink>

                            <SocialLink href="https://x.com/ugahacks" label="X (Twitter)">
                                {/* X */}
                                <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-5 w-5 fill-current">
                                    <path d="M18.244 2H21l-6.54 7.47L22 22h-5.98l-4.67-6.1L5.96 22H3.2l6.98-7.97L2 2h6.07l4.22 5.66L18.24 2Zm-2.09 18.4h2.16L8.05 3.52H5.8l10.35 16.88Z" />
                                </svg>
                            </SocialLink>

                            <SocialLink href="https://www.instagram.com/ugahacks" label="Instagram">
                                {/* Instagram */}
                                <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-5 w-5 fill-current">
                                    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.81.24 2.23.4.56.22.96.49 1.38.91.42.42.69.82.91 1.38.16.42.35 1.06.4 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.81-.4 2.23a3.8 3.8 0 0 1-.91 1.38 3.8 3.8 0 0 1-1.38.91c-.42.16-1.06.35-2.23.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.24-2.23-.4a3.8 3.8 0 0 1-1.38-.91 3.8 3.8 0 0 1-.91-1.38c-.16-.42-.35-1.06-.4-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.81.4-2.23.22-.56.49-.96.91-1.38.42-.42.82-.69 1.38-.91.42-.16 1.06-.35 2.23-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.98.05-1.5.21-1.86.35-.47.18-.8.39-1.15.74-.35.35-.56.68-.74 1.15-.14.36-.3.88-.35 1.86-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05.98.21 1.5.35 1.86.18.47.39.8.74 1.15.35.35.68.56 1.15.74.36.14.88.3 1.86.35 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.98-.05 1.5-.21 1.86-.35.47-.18.8-.39 1.15-.74.35-.35.56-.68.74-1.15.14-.36.3-.88.35-1.86.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-.98-.21-1.5-.35-1.86a2.3 2.3 0 0 0-.74-1.15 2.3 2.3 0 0 0-1.15-.74c-.36-.14-.88-.3-1.86-.35-1.24-.06-1.61-.07-4.76-.07Zm0 3.3a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm5.95-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                            </SocialLink>

                            <SocialLink href="https://www.linkedin.com/company/ugahacks" label="LinkedIn">
                                {/* LinkedIn */}
                                <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-5 w-5 fill-current">
                                    <path d="M20.45 20.45h-3.56v-5.54c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.63H9.36V9h3.41v1.56h.05c.47-.9 1.62-1.84 3.34-1.84 3.57 0 4.23 2.35 4.23 5.41v6.32ZM5.34 7.44a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V9H3.56v11.45Z" />
                                </svg>
                            </SocialLink>
                        </div>
                        {/* <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-4 flex w-full max-w-sm items-center gap-2"
                            aria-label="Subscribe to updates"
                        >
                            <input
                                type="email"
                                required
                                placeholder="you@uga.edu"
                                className="w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-red-500/60"
                            />
                            <button
                                type="submit"
                                className="rounded-xl bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
                            >
                                Join
                            </button>
                        </form> */}
                        {/* <p className="mt-2 text-[11px] text-neutral-500">
                            We&apos;ll never share your email.
                        </p> */}
                    </div>
                </div>

                {/* bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
                    <p className="text-xs text-neutral-500">
                        © {year} UGAHacks. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm">
                        <Link className="transition hover:text-white" href="/contact">
                            Contact
                        </Link>
                        <button
                            onClick={handleBackToTop}
                            className="text-left transition hover:text-white"
                            aria-label="Back to top"
                        >
                            Back to Top
                        </button>
                    </div>

                    <p className="text-xs font-medium text-white/80">
                        Boot up your dreams.
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* ---------- helpers ---------- */

function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900/60 transition hover:border-white/20 hover:bg-neutral-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
        >
            {children}
        </Link>
    );
}

function NavColumn({
    title,
    links,
}: {
    title: string;
    links: { href: string; label: string }[];
}) {
    return (
        <nav aria-label={title}>
            <h3 className="text-sm font-semibold tracking-wide text-white">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm">
                {links.map((l) => (
                    <li key={l.href}>
                        <Link className="text-neutral-400 transition hover:text-white" href={l.href}>
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
