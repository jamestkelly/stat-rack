"use client";

import { HeroSection } from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthContext } from "@/lib/contexts/Auth.context";
import { Dumbbell, Github, Instagram, LineChart, List, Loader2, Twitter } from "lucide-react";
import { useContext, useState } from "react";

export default function LandingPage() {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const features = [
    {
      icon: <Dumbbell className="h-8 w-8 text-primary-foreground" />,
      title: "Effortless Logging",
      description:
        "Quickly log sets, reps, and weight with our intuitive interface. Spend more time lifting, less time tapping.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary-foreground" />,
      title: "Visualize Your Progress",
      description:
        "See your strength gains over time with beautiful, easy-to-read charts for every exercise.",
    },
    {
      icon: <List className="h-8 w-8 text-primary-foreground" />,
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
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-bold text-primary">
          <Dumbbell className="h-8 w-8" />
          <span>Statrack</span>
        </div>
        <Button variant="ghost" onClick={getStarted}>
          Login
        </Button>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection onGetStarted={getStarted} />

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
              <Card 
                key={index} 
                className="transition-all transform hover:scale-105 hover:shadow-lg hover:bg-accent"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  {feature.icon}
                  <CardTitle className="text-left">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
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
          <div className="mt-16 pt-8 border-t border-muted-foreground/20 text-muted-foreground text-sm">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-8">
              <div className="flex gap-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">About</a>
              </div>
              <div className="flex gap-4">
                <a href="#" aria-label="Github"><Github className="h-5 w-5 hover:text-foreground transition-colors" /></a>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-foreground transition-colors" /></a>
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-foreground transition-colors" /></a>
              </div>
            </div>
            <p className="mt-8 text-center">&copy; 2025 Statrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
