import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { Pool } from "pg"
import bcrypt from "bcryptjs"

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export const authConfig = {
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const email = typeof credentials?.email === "string" ? credentials.email : ""
                const password = typeof credentials?.password === "string" ? credentials.password : ""

                const { rows } = await pool.query(
                    "SELECT * FROM users WHERE email = $1",
                    [email]
                )
                const user = rows[0]
                if (!user) return null

                const valid = await bcrypt.compare(password, user.password_hash)
                if (!valid) return null

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    bedriftId: user.bedrift_id,
                }
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }: any) {
            if (user) token.bedriftId = user.bedriftId
            return token
        },
        session({ session, token }: any) {
            session.user = {
                ...session.user,
                bedriftId: token.bedriftId,
            }
            return session
        },
    },
}

export default NextAuth(authConfig)