"use client";

import { HeroScene } from "../three/HeroScene";
import { Button } from "../ui/button";

export const HeroSection: React.FC<{ onGetStarted: () => void }> = ({
  onGetStarted,
}) => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-10 sm:py-32 rounded-2xl mt-2">
      <div className="relative z-10 grid md:grid-cols-2 items-center gap-8 text-center md:text-left container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            The Ultimate Workout Tracker
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Log your workouts, track your progress, and get stronger. Simple,
            powerful, and free.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/80"
            >
              Get Started Free
            </Button>
          </div>
        </div>
        <div className="relative h-[500px] w-full mt-8 md:mt-0">
          <HeroScene />
        </div>
      </div>
    </section>
  );
};
