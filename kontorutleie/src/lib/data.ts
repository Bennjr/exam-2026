import { Pool } from "pg"

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export async function getBedrift(bedriftId: number) {
    const { rows } = await pool.query(
        "SELECT * FROM bedrifter WHERE id = $1",
        [bedriftId]
    )
    return rows[0]
}

export async function getDevices(bedriftId: number) {
    const { rows } = await pool.query(
        "SELECT * FROM devices WHERE bedrift_id = $1 ORDER BY name",
        [bedriftId]
    )
    return rows
}