let mfaStore = new Map()

const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString()

export async function POST(req) {
  try {
    const { username, code, action } = await req.json()
    const key = username?.toLowerCase()
    const record = mfaStore.get(key)

    if (action === "generate") {
      const otp = generateOTP()
      mfaStore.set(key, { otp, attempts: 0, issuedAt: Date.now() })
      console.log(`OTP for ${key}: ${otp}`)
      return Response.json({ status: "OTP generated", otp }) // Return OTP
    }

    if (!record) return Response.json({ message: "OTP not issued" }, { status: 403 })
    if (!code) return Response.json({ message: "Missing code" }, { status: 400 })
    if (Date.now() - record.issuedAt > 2 * 60 * 1000)
      return Response.json({ message: "OTP expired" }, { status: 403 })
    if (record.attempts >= 3)
      return Response.json({ message: "Too many attempts" }, { status: 403 })
    if (record.otp !== code) {
      mfaStore.set(key, { ...record, attempts: record.attempts + 1 })
      return Response.json({ message: "Invalid code" }, { status: 401 })
    }

    mfaStore.delete(key)
    return Response.json({ success: true })
  } catch {
    return Response.json({ message: "Internal server error" }, { status: 500 })
  }
}
