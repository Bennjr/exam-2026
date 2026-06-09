import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 16);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-10 w-full bg-zinc-50 shadow-md transition-all duration-300 ${isAtTop ? "py-6" : "py-3"
                }`}
        >
            <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-6">
                <ul className="flex items-center gap-4">
                    <li>
                        <Link
                            href="/"
                            className="rounded-full bg-zinc-200 px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-300 cursor-pointer"
                        >
                            Hjem
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/om-oss"
                            className="rounded-full bg-zinc-200 px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-300 cursor-pointer"
                        >
                            Om oss
                        </Link>
                    </li>
                </ul>

                <Link
                    href="/login"
                    className="rounded-full bg-zinc-200 px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-300 cursor-pointer"
                >
                    Logg inn
                </Link>
            </div>
        </nav>
    );
}
