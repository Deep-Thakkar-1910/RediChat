import React from "react";
import AuthForm from "../_AuthComponents/AuthForm";

const SignUpPage = () => {
    return (
        <main className="flex w-full items-center justify-center rounded-lg">
            <AuthForm isSignUp={true} />
        </main>
    );
};

export default SignUpPage;
