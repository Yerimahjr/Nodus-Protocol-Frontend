import { Skeleton } from "@/components/ui/skeleton"

interface PoolMiniCardProps {
  label: string
  value: string | null
  sub?: string
  accent?: "violet" | "cyan"
}

export function PoolMiniCard({ label, value, sub, accent = "violet" }: PoolMiniCardProps) {
  const ring = accent === "violet"
    ? "border-violet-500/20 hover:border-violet-400/40"
    : "border-cyan-500/20 hover:border-cyan-400/40"

  const text = accent === "violet" ? "text-violet-300" : "text-cyan-300"

  return (
    <div
      className={`rounded-2xl border bg-white/[0.02] p-5 transition-colors ${ring}`}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-gray-600">
        {label}
      </p>
      <div className="mt-2">
        {value === null ? (
          <Skeleton className="h-8 w-28" />
        ) : (
          <p className={`text-2xl font-semibold tabular-nums ${text}`}>{value}</p>
        )}
      </div>
      {sub && (
        <p className="mt-1 text-xs text-gray-600">{sub}</p>
      )}
    </div>
  )
}
