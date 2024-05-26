import { useState } from "react";
import LoginHeader from "../Components/LoginHeader";

const Login = () => {
    const [isSignIn, toggleSignIn] = useState(true);
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    const handleSignIn = () => {
        toggleSignIn(!isSignIn);
    };

    return (
        <div className="bg-cover-pic bg-cover bg-center h-screen">
            <LoginHeader />
            <div className="box-border relative m-auto w-1/3 p-10 bg-black bg-opacity-80 text-white">
                <h1 className="text-white text-4xl font-bold">
                    {isSignIn ? `Sign In` : `Sign Up`}
                </h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    {!isSignIn && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="m-4 p-3 bg-slate-500 bg-opacity-60"
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="m-4 p-3 bg-slate-500 bg-opacity-60"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="m-4 p-3 bg-slate-500 bg-opacity-60"
                    />
                    {!isSignIn && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="m-4 p-4 bg-slate-500 bg-opacity-60"
                        />
                    )}
                    <button onClick={() => {}} className="m-4 p-2 bg-red-500">
                        {isSignIn ? `Sign In` : `Sign Up`}
                    </button>
                </form>
                {isSignIn ? (
                    <div className="mt-8" onClick={handleSignIn}>
                        New to Netflix ?{" "}
                        <span className="ml-1 cursor-pointer">
                            Sign up now.
                        </span>
                    </div>
                ) : (
                    <div className="mt-8" onClick={handleSignIn}>
                        Already a member ?{" "}
                        <span className=" ml-1 cursor-pointer">
                            Sign In here.
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
