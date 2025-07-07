let store = new Map()

export async function POST(req) {
  try {
    const { username } = await req.json()
    if (!username) return Response.json({ message: "Username required" }, { status: 400 })

    const now = Date.now()
    const existing = store.get(username)

    if (existing && now - existing.issuedAt < 10000) {
      return Response.json({ message: "Try again in a few seconds" }, { status: 429 })
    }

    const secureWord = Math.random().toString(36).slice(2, 8).toUpperCase()
    store.set(username, { secureWord, issuedAt: now })

    return Response.json({ secureWord, issuedAt: now })
  } catch {
    return Response.json({ message: "Internal server error" }, { status: 500 })
  }
}
