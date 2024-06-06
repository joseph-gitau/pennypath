// pages/dashboard.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Ensure you are using 'next/navigation'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import Button from "../components/common/Button";
import Header from "../components/layout/Header";

const Dashboard: React.FC = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // setUser(user.email);
            } else {
                router.push("/signin");
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleSignOut = async () => {
        await signOut(auth);
        router.push("/signin");
    };

    return (
        <div className="container mx-auto mt-2">
            
            <Header />
        </div>
    );
};

export default Dashboard;
