// pages/signup.tsx
import React from "react";
import SignUp from "../components/auth/signup";
import Header from "./../components/layout/Header";

const SignUpPage: React.FC = () => {
  return (
    <div>
      <Header />
      <SignUp />
    </div>
  );
};

export default SignUpPage;
