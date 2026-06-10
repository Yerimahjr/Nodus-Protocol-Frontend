import { pool, type PoolStats } from "@/lib/api"

async function getPoolStats(): Promise<PoolStats | null> {
  try {
    const res = await pool.stats()
    return res.data
  } catch {
    return null
  }
}

function fmt(n: number, decimals = 4): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: decimals })
}

export default async function Home() {
  const stats = await getPoolStats()
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "#"
  const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL ?? "/docs"

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-sm text-violet-400">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Now on testnet — mainnet launching Q3 2026
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          The{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            decentralized
          </span>{" "}
          infrastructure layer
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
          Nodus Protocol enables permissionless, composable financial
          primitives — built for builders, governed by the community.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={appUrl}
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Launch App
          </a>
          <a
            href={docsUrl}
            className="rounded-full border border-white/10 px-8 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-white/20 hover:text-white"
          >
            Read Docs
          </a>
        </div>

        {/* Live pool stats — only rendered when the backend is reachable */}
        {stats && (
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                label: `${stats.reserves.token_0} Reserve`,
                value: fmt(parseFloat(stats.reserves.reserve_0)),
              },
              {
                label: `${stats.reserves.token_1} Reserve`,
                value: fmt(parseFloat(stats.reserves.reserve_1)),
              },
              {
                label: `${stats.reserves.token_0} Price`,
                value: `$${fmt(stats.price_token0_in_token1)}`,
              },
              {
                label: "Fee",
                value: `${(stats.fee_bps / 100).toFixed(2)}%`,
              },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5"
              >
                <p className="mb-1 text-xs text-gray-500">{label}</p>
                <p className="text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
