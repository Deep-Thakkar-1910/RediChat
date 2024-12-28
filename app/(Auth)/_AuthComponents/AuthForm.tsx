"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface AuthFormProps {
    isSignUp?: boolean;
}
export default function AuthForm({ isSignUp }: AuthFormProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>
                    {isSignUp ? "Create an account" : "Welcome back"}
                </CardTitle>
                <CardDescription>
                    {isSignUp
                        ? "Sign up to get started"
                        : "Sign in to your account"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        {isSignUp && (
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                        )}
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="m@example.com"
                                type="email"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col">
                <Button className="mb-4 w-full">
                    {isSignUp ? "Sign Up" : "Sign In"}
                </Button>
                <motion.p
                    className="text-center text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {isSignUp
                        ? "Already have an account?"
                        : "Don't have an account?"}{" "}
                    <Link href={isSignUp ? "sign-in" : "/sign-up"}>
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </Link>
                </motion.p>
            </CardFooter>
        </Card>
    );
}
