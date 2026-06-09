import { Pool } from "pg"
import type { GetServerSideProps } from "next"
import { Footer } from "../components/Footer"
import { Nav } from "../components/nav"

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

type Device = {
    id: number
    name: string
    ip_address: string
    type: string
    is_online: boolean
}

type Bedrift = {
    id: number
    name: string
    vlan_id: number
    subnet: string
    gateway: string
}

type Props = {
    bedrift: Bedrift
    devices: Device[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { rows: bedrifter } = await pool.query("SELECT * FROM bedrifter WHERE id = $1", [1])
    const { rows: devices } = await pool.query("SELECT * FROM devices WHERE bedrift_id = $1", [1])

    return {
        props: {
            bedrift: bedrifter[0],
            devices,
        }
    }
}

export default function Dashboard({ bedrift, devices }: Props) {
    const onlineCount = devices.filter((d) => d.is_online).length

    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-900">
            <Nav />
            <div className="mx-auto max-w-[1200px] px-6 py-16 flex flex-col gap-10">

                <div>
                    <h1 className="text-2xl font-medium">Hallo, velkommen tilbake!</h1>
                    <p className="text-sm text-zinc-500 mt-1">
                        {bedrift.name} · VLAN {bedrift.vlan_id}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <MetricCard label="Enheter online" value={`${onlineCount} / ${devices.length}`} />
                    <MetricCard label="Subnett" value={bedrift.subnet} mono />
                    <MetricCard label="Gateway" value={bedrift.gateway} mono />
                </div>

                <section>
                    <h2 className="text-base font-medium mb-3">Enheter</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {devices.map((device) => (
                            <div key={device.id} className="bg-white border border-zinc-200 rounded-xl p-3 flex items-center gap-3">
                                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${device.is_online ? "bg-green-600" : "bg-zinc-300"}`} />
                                <div>
                                    <p className="text-sm font-medium">{device.name}</p>
                                    <p className="text-xs text-zinc-400">{device.ip_address ?? "Ingen IP"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-base font-medium mb-3">Nettverksdetaljer</h2>
                    <div className="bg-white border border-zinc-200 rounded-xl divide-y divide-zinc-100">
                        {[
                            ["VLAN", `${bedrift.vlan_id} (${bedrift.name})`],
                            ["Subnett", bedrift.subnet],
                            ["Gateway", bedrift.gateway],
                            ["Maks enheter", "10"],
                        ].map(([key, val]) => (
                            <div key={key} className="flex justify-between px-4 py-3 text-sm">
                                <span className="text-zinc-400">{key}</span>
                                <span className="font-mono font-medium">{val}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-base font-medium mb-3">Flere produkter</h2>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {[
                            {
                                name: "Virtuell kontorplass",
                                text: "Skalerbar løsning for team som trenger rask tilgang til arbeidsplasser og møterom.",
                            },
                            {
                                name: "Secure Wi-Fi",
                                text: "Sikker trådløs nettverkstjeneste med overvåking, segmentering og enkel administrasjon.",
                            },
                            {
                                name: "Backup & drift",
                                text: "Automatiske sikkerhetskopieringer og pålitelig operasjonell støtte for virksomheten din.",
                            },
                        ].map((product) => (
                            <article key={product.name} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                                <h3 className="text-sm font-semibold text-zinc-900">{product.name}</h3>
                                <p className="mt-2 text-sm text-zinc-600">{product.text}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}

function MetricCard({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
    return (
        <div className="bg-zinc-100 rounded-lg p-4">
            <p className="text-xs text-zinc-500 mb-1">{label}</p>
            <p className={`text-lg font-medium ${mono ? "font-mono text-base" : ""}`}>{value}</p>
        </div>
    )
}