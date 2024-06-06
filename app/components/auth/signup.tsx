// components/auth/SignUp.tsx
"use client";

import React, { useState } from "react";
import { auth } from "../../lib/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../common/Button";
import { useRouter } from "next/router";

const SignUp: React.FC = () => {
    const router = useRouter();

    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    // check if user is already signed in
    if (auth.currentUser) {
        router.push("/dashboard");
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        // Validate email and password
        if (!email || !password) {
            setError("Please enter an email and password");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log("User created:", user);
            // On successful sign-up, redirect to the user dashboard
            router.push("/dashboard");
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-3xl font-bold text-primary text-center">
                Sign Up
            </h2>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSignUp} className="mt-4">
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit" className="w-full">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
