"use client"

import { useMemo } from "react"
import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Wallet, Award, Zap, Calendar, Gift } from "lucide-react"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { useAccount } from "wagmi"

export default function PortalPage() {
  const { address, isConnected } = useAccount()
  const maskedAddress = useMemo(
    () => (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null),
    [address],
  )

  // Mock data
  const scouts = [
    { id: 1, name: "Scout #42", rarity: "Legendary", status: "Unrevealed" },
    { id: 2, name: "Scout #156", rarity: "Rare", status: "Unrevealed" },
    { id: 3, name: "Scout #289", rarity: "Common", status: "Unrevealed" },
  ]

  const badges = [
    { name: "Camper's Badge", earnedDate: "2024-12-15", icon: "🏕️" },
    { name: "Community Contributor", earnedDate: "2024-12-20", icon: "🤝" },
  ]

  const quests = [
    { title: "Join the Discord", progress: 100, completed: true },
    { title: "Share Your Scout Story", progress: 100, completed: true },
    { title: "Attend First Event", progress: 0, completed: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-6xl mx-auto">
          {!isConnected && (
            <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
              <div className="max-w-md text-center px-6 py-10">
                <Wallet className="w-14 h-14 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Holder Portal
                </h2>
                <p className="text-muted-foreground mb-6">
                  Connect your wallet to unlock your Scout profile, badges, and quests.
                </p>
                <ConnectWalletButton className="w-full" />
                <p className="mt-4 text-xs text-muted-foreground">
                  Only Scouts (verified holders) can access this portal.
                </p>
              </div>
            </div>
          )}

          <div className={isConnected ? "space-y-10" : "space-y-10 blur-sm pointer-events-none select-none"}>
          {/* Profile Header */}
          <div className="mb-12">
            <Card className="p-8 border-border">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">Scout Portal</h1>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Connected:</span>
                    <code className="text-primary font-mono text-sm bg-muted px-3 py-1 rounded">
                      {maskedAddress ?? "Not connected"}
                    </code>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Scouts Held</div>
                  <div className="text-3xl font-bold text-primary">{scouts.length}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Badges Earned</div>
                  <div className="text-3xl font-bold text-accent">{badges.length}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Rank</div>
                  <div className="text-3xl font-bold text-foreground">Scout</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Voting Power</div>
                  <div className="text-3xl font-bold text-foreground">{scouts.length}</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="scouts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="scouts">My Scouts</TabsTrigger>
              <TabsTrigger value="quests">Quests</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            {/* My Scouts */}
            <TabsContent value="scouts">
              <Card className="p-8 border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Your Scout Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {scouts.map((scout) => (
                    <div key={scout.id} className="rounded-lg border border-border overflow-hidden hover-lift">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
                        🏕️
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{scout.name}</h4>
                        <div className="flex gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {scout.rarity}
                          </Badge>
                          <Badge className="text-xs">{scout.status}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Reveal date: TBA
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-8 p-4 bg-muted/30 rounded-lg">
                  Your Scouts are currently unrevealed. They will be revealed according to the roadmap phases. Check back after Phase 1 for reveal options!
                </p>
              </Card>
            </TabsContent>

            {/* Quests */}
            <TabsContent value="quests">
              <Card className="p-8 border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Active Quests</h2>
                <div className="space-y-4">
                  {quests.map((quest, idx) => (
                    <div key={idx} className="p-6 rounded-lg border border-border hover-lift">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-semibold text-foreground">{quest.title}</h4>
                        {quest.completed && (
                          <Badge className="bg-primary">Completed</Badge>
                        )}
                      </div>
                      <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                          style={{ width: `${quest.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{quest.progress}% Complete</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Badges */}
            <TabsContent value="badges">
              <Card className="p-8 border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Earned Badges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {badges.map((badge, idx) => (
                    <div key={idx} className="p-6 rounded-lg border-2 border-primary/30 bg-primary/5 text-center">
                      <div className="text-5xl mb-4">{badge.icon}</div>
                      <h4 className="font-semibold text-foreground mb-2">{badge.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        Earned on {new Date(badge.earnedDate).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Available Badges (Locked)</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start opacity-50">
                      <span className="text-2xl">🗳️</span>
                      <div>
                        <p className="font-medium text-foreground text-sm">Community Voter</p>
                        <p className="text-xs text-muted-foreground">Complete 5 community votes</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start opacity-50">
                      <span className="text-2xl">🌍</span>
                      <div>
                        <p className="font-medium text-foreground text-sm">IRL Explorer</p>
                        <p className="text-xs text-muted-foreground">Attend your first CapyCamp event</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Events */}
            <TabsContent value="events">
              <Card className="p-8 border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Upcoming Events</h2>

                <div className="mb-8 p-6 rounded-lg bg-muted/30 border border-border text-center">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground">
                    No upcoming events scheduled yet. IRL events will be announced in Phase 3 of the roadmap.
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-4">Your Event Access</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-6 border-primary/20 bg-primary/5">
                    <h4 className="font-semibold text-foreground mb-2">Scout Status</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      You hold 3 Scouts, making you eligible for all community events.
                    </p>
                    <Badge className="bg-primary">Premium Access</Badge>
                  </Card>
                  <Card className="p-6 border-border">
                    <h4 className="font-semibold text-foreground mb-2">Discount Tier</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your holdings qualify you for 15% discount on event tickets.
                    </p>
                    <Badge variant="outline">Senior Scout</Badge>
                  </Card>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Utility Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Scout Utilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-border hover-lift">
                <Zap className="w-6 h-6 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Voting Power</h4>
                <p className="text-sm text-muted-foreground">
                  Vote on community decisions and roadmap priorities.
                </p>
              </Card>
              <Card className="p-6 border-border hover-lift">
                <Gift className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Exclusive Drops</h4>
                <p className="text-sm text-muted-foreground">
                  Early access to merchandise, badges, and special releases.
                </p>
              </Card>
              <Card className="p-6 border-border hover-lift">
                <Award className="w-6 h-6 text-secondary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Recognition</h4>
                <p className="text-sm text-muted-foreground">
                  Earn roles and status in the community based on activity.
                </p>
              </Card>
            </div>
          </div>
          </div>
        </div>
      </main>
      <img
        src="/comingsoon.png"
        alt=""
        aria-hidden="true"
        className="fixed bottom-0 left-1/2 z-10 w-56 -translate-x-1/2 pointer-events-none select-none md:w-72"
      />
      <SiteFooter />
    </div>
  )
}
