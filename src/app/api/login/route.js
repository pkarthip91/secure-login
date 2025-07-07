let users = new Map()

export async function POST(req) {
  try {
    const { username, secureWord, hashedPassword } = await req.json()
    if (!username || !secureWord || !hashedPassword) {
      return Response.json({ message: "Missing fields" }, { status: 400 })
    }

    const now = Date.now()
    let user = users.get(username)

    if (!user) {
      user = { hashedPassword, secureWord, issuedAt: now }
      users.set(username, user)
    }

    const isExpired = now - user.issuedAt > 60000
    if (user.secureWord !== secureWord || isExpired) {
      return Response.json({ message: "Invalid or expired secure word" }, { status: 401 })
    }

    if (user.hashedPassword !== hashedPassword) {
      return Response.json({ message: "Invalid password" }, { status: 401 })
    }

    const token = `mock-token-${now}`
    return Response.json({ token })
  } catch {
    return Response.json({ message: "Internal server error" }, { status: 500 })
  }
}
