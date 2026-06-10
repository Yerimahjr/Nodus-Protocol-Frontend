const links = [
  { label: "Discord", href: "https://discord.gg/nodus-protocol", desc: "Join the conversation" },
  { label: "Twitter / X", href: "https://twitter.com/nodusprotocol", desc: "Latest news and updates" },
  { label: "GitHub", href: "https://github.com/nodus-protocol", desc: "Open-source code and issues" },
]

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="mb-4 text-center text-4xl font-bold text-white">Community</h1>
      <p className="mb-12 text-center text-gray-400">
        Nodus Protocol is built in public. Come help shape it.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {links.map(({ label, href, desc }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-violet-500/40 hover:bg-violet-500/5"
          >
            <span className="font-semibold text-white">{label}</span>
            <span className="text-sm text-gray-400">{desc}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
