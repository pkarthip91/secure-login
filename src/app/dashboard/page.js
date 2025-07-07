"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login/username")
      return
    }

    const fetchData = async () => {
      try {
        const res = await fetch("/api/transaction-history")
        if (!res.ok) throw new Error("Failed to load data")
        const data = await res.json()
        setTransactions(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [router])

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-left mt-12">Transaction History</h1>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Reference ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">To</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Transaction Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{txn.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{txn.referenceId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{txn.to}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{txn.transactionType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{txn.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
