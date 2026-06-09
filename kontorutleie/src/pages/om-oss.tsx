import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-black dark:text-zinc-100">
            <section className="mx-auto flex max-w-4xl flex-col gap-8 rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Om oss</p>
                <div className="space-y-4">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        En ekstra side i pages-mapper.
                    </h1>
                    <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
                        Denne siden viser hvordan du kan legge til flere ruter med Next.js pages-router.
                        Du kan enkelt legge til mer innhold eller flere sider i samme mappe.
                    </p>
                </div>

                <Link
                    href="/"
                    className="w-fit rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                    Tilbake til startsiden
                </Link>
            </section>
        </main>
    );
}
