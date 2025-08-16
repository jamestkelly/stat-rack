"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthContext } from "@/lib/contexts/Auth.context";
import { Dumbbell, LineChart, List, Loader2 } from "lucide-react";
import { useContext, useState } from "react";

export default function LandingPage() {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const features = [
    {
      icon: <Dumbbell className="h-8 w-8 text-primary" />,
      title: "Effortless Logging",
      description:
        "Quickly log sets, reps, and weight with our intuitive interface. Spend more time lifting, less time tapping.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Visualize Your Progress",
      description:
        "See your strength gains over time with beautiful, easy-to-read charts for every exercise.",
    },
    {
      icon: <List className="h-8 w-8 text-primary" />,
      title: "Build Custom Routines",
      description:
        "Create and save your own workout templates to start your next session in seconds.",
    },
  ];

  function getStarted() {
    setShowLogin(true);
  }

  if (authLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-bold text-primary">
          <Dumbbell className="h-8 w-8" />
          <span>Statrack</span>
        </div>
        <Button variant="ghost" onClick={getStarted}>
          Login
        </Button>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center py-20 sm:py-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            The Ultimate Workout Tracker
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Log your workouts, track your progress, and get stronger. Simple,
            powerful, and free.
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={getStarted}>
              Get Started Free
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Why you'll love Statrack
            </h2>
            <p className="mt-2 text-muted-foreground">
              Everything you need to succeed in the gym.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="items-center">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-16 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to take your training to the next level?
          </h2>
          <div className="mt-8">
            <Button size="lg" onClick={getStarted}>
              Start Tracking Today
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
