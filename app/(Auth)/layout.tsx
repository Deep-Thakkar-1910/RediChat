import React from "react";
import GlowyBorder from "../_CommonComponents/GlowyBorders";
import ThemeToggle from "../_CommonComponents/ThemeToggler";
import FloatingBalls from "../_CommonComponents/FloatingBalls";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24 p-8 relative overflow-hidden">
      <div className="w-full z-10 relative flex justify-center items-center flex-col shrink-0">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">REDICHAT</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Connect. Chat. Collaborate.
          </p>
        </div>
        <GlowyBorder>{children}</GlowyBorder>
      </div>
      <FloatingBalls />
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </main>
  );
}
