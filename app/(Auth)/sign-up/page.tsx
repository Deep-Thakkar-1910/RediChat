import React from "react";
import AuthForm from "../_AuthComponents/AuthForm";

const SignUpPage = () => {
  return (
    <main className="flex w-full justify-center items-center rounded-lg">
      <AuthForm isSignUp={true} />
    </main>
  );
};

export default SignUpPage;
