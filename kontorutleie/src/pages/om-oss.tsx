import Link from "next/link";
import { Footer } from "../components/Footer";
import { Nav } from "../components/nav";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-900">
            <Nav />

            <section className="w-full bg-zinc-50">
                <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-16 lg:py-20">
                    <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-zinc-200 sm:p-10 lg:p-12">
                        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Om oss</p>
                        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                            <div className="space-y-5">
                                <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                                    Vi bygger trygge og fleksible kontorløsninger for moderne virksomheter.
                                </h1>
                                <p className="max-w-2xl text-lg text-zinc-600">
                                    Kontorutleie AS hjelper bedrifter med å få et kontor som passer deres arbeidsmåte – fra daglig drift og møterom til nettverk, sikkerhet og skalerbar infrastruktur.
                                </p>
                            </div>

                            <div className="rounded-3xl bg-zinc-100 p-6 shadow-sm ring-1 ring-zinc-200">
                                <p className="text-sm font-medium text-zinc-500">Vår filosofi</p>
                                <p className="mt-3 text-zinc-700">
                                    Vi fokuserer på enkel tilgang, pålitelig drift og en opplevelse som gjør det lett for teamet å jobbe effektivt – uten unødvendig kompleksitet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white">
                <div className="mx-auto grid max-w-[1200px] gap-6 px-6 py-16 md:grid-cols-3">
                    {[
                        {
                            title: "Rask oppstart",
                            text: "Vi setter opp moderne kontorløsninger med fokus på enkel implementering og god brukeropplevelse.",
                        },
                        {
                            title: "Sikker drift",
                            text: "Nettverk, tilgang og tjenester er bygget for å være stabile, robuste og lett å administrere.",
                        },
                        {
                            title: "Fleksible tilbud",
                            text: "Fra små team til større bedrifter får du løsninger som kan vokse med virksomheten din.",
                        },
                    ].map((item) => (
                        <article key={item.title} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{item.title}</h2>
                            <p className="mt-3 text-sm text-zinc-600">{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="w-full bg-zinc-100">
                <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Hvorfor velge oss?</h2>
                        <p className="text-zinc-600">
                            Vi kombinerer praktisk erfaring, moderne infrastruktur og personlig service for å gi deg et kontormiljø som fungerer i hverdagen.
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="w-fit rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
                    >
                        Tilbake til startsiden
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
