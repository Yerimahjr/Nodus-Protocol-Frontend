export default function DocsPage() {
  const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL ?? "https://docs.nodus-protocol.io"

  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold text-white">Documentation</h1>
      <p className="mb-8 text-gray-400">
        Guides, API references, and integration tutorials for building on Nodus
        Protocol.
      </p>
      <a
        href={docsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Open Docs ↗
      </a>
    </div>
  )
}
