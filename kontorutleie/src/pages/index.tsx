import { Footer } from "../components/Footer";
import { Nav } from "../components/nav";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            <Nav />
            <div className="flex flex-col gap-0 text-zinc-900">
                <section className="w-full bg-zinc-50">
                    <div className="mx-auto flex flex-col">
                        <div className="relative overflow-hidden bg-zinc-900">
                            <img
                                src="/office.jpg"
                                alt="Kontorlandskap"
                                className="h-[650px] w-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/70 to-zinc-900/20" />
                            <div className="absolute inset-0 flex items-end p-8 sm:p-10 lg:p-12">
                                <div className="max-w-xl rounded-3xl bg-black/35 p-6 shadow-xl backdrop-blur-sm ring-1 ring-white/10 sm:p-8">
                                    <p className="text-sm uppercase tracking-[0.35em] text-zinc-200">Konturutleie AS</p>
                                    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                        Moderne kontorlokaler med trygg, fleksibel drift.
                                    </h1>
                                    <p className="mt-4 max-w-md text-sm text-zinc-100 sm:text-base">
                                        Finn kontorplass, møteløsninger og driftstilpasninger som gjør hverdagen enklere for teamet ditt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-zinc-100">
                    <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-16">
                        <h1 className="text-2xl font-bold text-zinc-900">Våre tjenester</h1>
                        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <ServiceCard
                                title="Kontorløsninger"
                                text="Moderne arbeidsplasser med høyhastighetsnett, møterom og fleksible leieordninger for både små og store team."
                            />
                            <ServiceCard
                                title="Nettverksdrift"
                                text="Trygg og stabil drift med overvåking, support og skreddersydd nettverksdesign for din virksomhet."
                            />
                            <ServiceCard
                                title="Sikkerhets- og backup"
                                text="Beskytt kritiske systemer med backup, tilgangskontroll og robuste løsninger som gir ro i hverdagen."
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white">
                    <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-16">
                        <h1 className="text-2xl font-bold text-zinc-900">Nettverksdesign</h1>
                        <div className="space-y-4 flex flex-row gap-4">
                            <p className="mt-2 max-w-md text-xl text-zinc-900">
                                Vi tilbyr skreddersydde nettverksdesignløsninger for bedrifter i alle størrelser. Våre eksperter jobber tett med deg for å forstå dine behov og utvikle et nettverksdesign som er både pålitelig og skalerbart, slik at du kan fokusere på å drive virksomheten din uten bekymringer om IT-infrastrukturen.
                            </p>
                            <img src="/image.png" alt="Nettverksdiagram" className="rounded-xl w-200 h-auto object-fit" />
                        </div>
                    </div>
                </section>

                <section className="w-full bg-zinc-100">
                    <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-16">
                        <h1 className="text-2xl font-bold text-zinc-900">Kontakt oss</h1>
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm text-zinc-900">
                                <h2 className="text-xl font-semibold tracking-tight">Telefon</h2>
                                <p className="mt-2 text-sm text-zinc-600">+47 22 33 44 55</p>
                            </article>
                            <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm text-zinc-900">
                                <h2 className="text-xl font-semibold tracking-tight">E-post</h2>
                                <p className="mt-2 text-sm text-zinc-600">kontakt@kontorutleie.no</p>
                            </article>
                            <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm text-zinc-900">
                                <h2 className="text-xl font-semibold tracking-tight">Adresse</h2>
                                <p className="mt-2 text-sm text-zinc-600">Storgata 12, 0155 Oslo</p>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}


function ServiceCard({ title, text }: { title: string; text: string }) {
    return (
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm text-zinc-900">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{text}</p>
        </article>
    );
}