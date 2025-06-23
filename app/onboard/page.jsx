import { ArtistOnboardingForm } from "@/components/onboard/artist-onboarding-form"

export const metadata = {
  title: "Artist Onboarding - Artistly",
  description: "Join Artistly as a performing artist. Create your profile and start receiving booking requests.",
}

export default function OnboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Join as an Artist</h1>
        <p className="text-muted-foreground">
          Create your profile and start receiving booking requests from event planners
        </p>
      </div>
      <ArtistOnboardingForm />
    </div>
  )
}
