"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig";

const Header: React.FC = () => {
    const pathname = usePathname();
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsSignedIn(true);
                setUserName(user.displayName || user.email);
            } else {
                setIsSignedIn(false);
                setUserName(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Sign out error:", error);
        }
    };

    const linkClasses = (path: string) =>
        `ml-4 ${pathname === path ? "text-secondary font-bold" : "text-white"}`;

    return (
        <header className="bg-primary text-white py-4 px-2">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">PennyPath</h1>
                <nav className="flex items-center">
                    <Link href="#features" className={linkClasses("#features")}>
                        Features
                    </Link>
                    <Link href="#pricing" className={linkClasses("#pricing")}>
                        Pricing
                    </Link>
                    <Link href="#contact" className={linkClasses("#contact")}>
                        Contact
                    </Link>
                    {isSignedIn ? (
                        <>
                            <Link
                                href="/dashboard"
                                className={linkClasses("/dashboard")}
                            >
                                Dashboard
                            </Link>
                            <span className="ml-4 text-white">
                                Welcome, {userName}!
                            </span>

                            <button
                                onClick={handleSignOut}
                                className="ml-4 text-white"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/signin"
                                className={linkClasses("/signin")}
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className={linkClasses("/signup")}
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
