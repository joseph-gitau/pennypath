"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig";
import Button from "../common/Button";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // check if user is already signed in
    const auth = getAuth();
    if (auth.currentUser) {
        router.push("/dashboard");
    }

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
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
                Sign In
            </h2>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSignIn} className="mt-4">
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
                    Sign In
                </Button>
            </form>
        </div>
    );
};

export default SignIn;
