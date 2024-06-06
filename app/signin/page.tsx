// pages/signin.tsx
import React from "react";
import SignIn from "../components/auth/signin";
import Header from "./../components/layout/Header";

const SignInPage: React.FC = () => {
  return (
    <div>
      <Header />
      <SignIn />
    </div>
  );
};

export default SignInPage;
