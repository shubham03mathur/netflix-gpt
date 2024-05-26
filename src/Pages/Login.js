import { useState } from "react";
import LoginHeader from "../Components/LoginHeader";
import { useFormik } from "formik";

const Login = () => {
    const [isSignIn, toggleSignIn] = useState(true);
    const validateSignUp = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "*required";
        } else if (values.name.length > 15) {
            errors.name = "Must be 15 characters or less";
        }

        if (!values.email) {
            errors.email = "*required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        if (!values.password) {
            errors.password = "*required";
        } else if (
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                values.password
            )
        ) {
            errors.password =
                "Password must be atleast 8 char long ans should contains special characters.";
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = "*required";
        } else if (
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                values.confirmPassword
            )
        ) {
            errors.confirmPassword =
                "Password must be atleast 8 char long ans should contains special characters.";
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords should match.";
        }

        return errors;
    };
    const validateSignIn = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "*required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        if (!values.password) {
            errors.password = "*required";
        } else if (
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                values.password
            )
        ) {
            errors.password =
                "Password must be atleast 8 char long ans should contains special characters.";
        }
        return errors;
    };

    const getValidationProp = () => isSignIn ? validateSignIn : validateSignUp;

    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
            confirmPassword: "",
            email: "",
        },
        validate: getValidationProp(),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
   
    const handleSignIn = () => {
        toggleSignIn(!isSignIn);
        formik.setTouched({}, false);
    };

    return (
        <div className="bg-cover-pic bg-cover bg-center h-screen">
            <LoginHeader />
            <div className="box-border relative m-auto w-1/3 p-10 bg-black bg-opacity-80 text-white">
                <h1 className="text-white text-4xl font-bold">
                    {isSignIn ? `Sign In` : `Sign Up`}
                </h1>
                <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                    {!isSignIn && (
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Full Name"
                            className="m-4 p-3 bg-slate-500 bg-opacity-60"
                            {...formik.getFieldProps("name")}
                        />
                    )}
                    {formik.touched.name && formik.errors.name ? (
                        <p className="text-red-600 text-[10px] ml-4">{formik.errors.name}</p>
                    ) : null}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        className="m-4 p-3 bg-slate-500 bg-opacity-60"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className="text-red-600 text-[10px] ml-4">{formik.errors.email}</p>
                    ) : null}
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="m-4 p-3 bg-slate-500 bg-opacity-60"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <p className="text-red-600 text-[10px] ml-4">{formik.errors.password}</p>
                    ) : null}
                    {!isSignIn && (
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="m-4 p-3 bg-slate-500 bg-opacity-60"
                            {...formik.getFieldProps("confirmPassword")}
                        />
                    )}
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                        <p className="text-red-600 text-[10px] ml-4">{formik.errors.confirmPassword}</p>
                    ) : null}
                    <button className="m-4 p-2 bg-red-500">
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
