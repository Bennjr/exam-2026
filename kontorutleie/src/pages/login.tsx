import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";
import { Nav } from "../components/nav";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("admin@bedrift-a.no");
    const [password, setPassword] = useState("password");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setError("");

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false);

        if (result?.error) {
            setError("Feil e-post eller passord.");
            return;
        }

        router.push("/dashboard");
    }

    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-900">
            <Nav />
            <div className="px-6 py-16 min-h-screen">
                <section className="mx-auto flex w-full max-w-[480px] flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                    <div className="space-y-2">
                        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Logg inn</p>
                        <h1 className="text-3xl font-semibold tracking-tight">Logg inn for å se dashboard</h1>
                        <p className="text-sm text-zinc-600">
                            Bruk en av de seedede demo-kontoene, for eksempel admin@bedrift-a.no / password.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">
                            E-post
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none ring-0 transition focus:border-zinc-400 focus:bg-white"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">
                            Passord
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className="rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none ring-0 transition focus:border-zinc-400 focus:bg-white"
                                required
                            />
                        </label>

                        {error ? <p className="text-sm text-red-600">{error}</p> : null}

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? "Logger inn..." : "Logg inn"}
                        </button>
                    </form>
                </section>
            </div>
            <Footer />
        </main>
    );
}
