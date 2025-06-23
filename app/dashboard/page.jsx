import { ManagerDashboard } from "@/components/dashboard/manager-dashboard"
import { getArtistSubmissions } from "@/lib/data"

export const metadata = {
  title: "Manager Dashboard - Artistly",
  description: "Manage your artist roster and booking requests.",
}

export default async function DashboardPage() {
  const submissions = await getArtistSubmissions()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Manager Dashboard</h1>
        <p className="text-muted-foreground">Manage your artist roster and booking requests</p>
      </div>
      <ManagerDashboard submissions={submissions} />
    </div>
  )
}
