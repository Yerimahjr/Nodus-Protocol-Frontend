import { StatusBadge, TokenBadge } from "@/components/ui/badge"
import { stroopsToXlm, rawToUsdc, timeAgo, shortenAddress } from "@/lib/format"

interface Transaction {
  id: string
  sender: string
  recipient: string
  amount: number
  token: string
  status: string
  tx_hash?: string
  created_at: string
}

interface TransactionRowProps {
  tx: Transaction
}

export function TransactionRow({ tx }: TransactionRowProps) {
  const formattedAmount =
    tx.token === "XLM" ? stroopsToXlm(tx.amount) : rawToUsdc(tx.amount)

  return (
    <tr className="border-b border-white/5 transition-colors hover:bg-white/[0.02]">
      <td className="py-3 pl-4 pr-3">
        <code className="font-mono text-xs text-gray-500">
          {tx.id.slice(0, 8)}…
        </code>
      </td>
      <td className="px-3 py-3 text-sm text-gray-300">
        {shortenAddress(tx.sender)}
      </td>
      <td className="px-3 py-3 text-sm text-gray-300">
        {shortenAddress(tx.recipient)}
      </td>
      <td className="px-3 py-3 text-right tabular-nums">
        <span className="text-sm font-medium text-white">{formattedAmount}</span>{" "}
        <TokenBadge symbol={tx.token} />
      </td>
      <td className="px-3 py-3">
        <StatusBadge status={tx.status} />
      </td>
      <td className="py-3 pl-3 pr-4 text-right text-xs text-gray-600">
        {timeAgo(tx.created_at)}
      </td>
    </tr>
  )
}

interface TransactionTableProps {
  transactions: Transaction[]
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  if (transactions.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-gray-600">No transactions yet.</p>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/5">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-white/5 bg-white/[0.02]">
            {["ID", "From", "To", "Amount", "Status", "Age"].map((h) => (
              <th
                key={h}
                className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-600 first:pl-4 last:pr-4 last:text-right"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <TransactionRow key={tx.id} tx={tx} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
