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
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-8 md:p-24">
            <div className="relative z-10 flex w-full shrink-0 flex-col items-center justify-center">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">
                        REDICHAT
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Connect. Chat. Collaborate.
                    </p>
                </div>
                <GlowyBorder>{children}</GlowyBorder>
            </div>
            <FloatingBalls />
            <div className="absolute right-4 top-4">
                <ThemeToggle />
            </div>
        </main>
    );
}
