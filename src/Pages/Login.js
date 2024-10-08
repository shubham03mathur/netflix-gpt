import { useState } from "react";
import SnackbarAlert from "../Components/UI/SnackbarAlert";
import { useFormik } from "formik";

import { auth } from "../utility/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utility/userSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignIn, toggleSignIn] = useState(true);
    const [message, setMessage] = useState({
        severity: "",
        text: "",
    });
    const [open, setOpen] = useState(false);

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
                "Password must be atleast 8 char long and should contains special characters.";
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

    const getValidationProp = () =>
        isSignIn ? validateSignIn : validateSignUp;

    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
            confirmPassword: "",
            email: "",
        },
        validate: getValidationProp(),
        onSubmit: async (
            { name, password, confirmPassword, email },
            { resetForm }
        ) => {
            try {
                if (!isSignIn) {
                    //create account
                    await createUserWithEmailAndPassword(auth, email, password);

                    await updateProfile(auth.currentUser, {
                        displayName: name,
                    });
                    setOpen(true);
                    setMessage({
                        severity: "success",
                        text: `Welcome! Your account has been created successfully.`,
                    });
                } else {
                    const userCredential = await signInWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );
                    const user = userCredential.user;
                    setOpen(true);
                    setMessage({
                        severity: "success",
                        text: `Welcome back ${user.displayName}! Logging you in...`,
                    });
                }

                const { uid, email: userEmail, displayName } = auth.currentUser;

                dispatch(
                    addUser({
                        uid,
                        email: userEmail,
                        displayName,
                        userPhotoURL:
                            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
                    })
                );
                resetForm();
                navigate("/browse");
            } catch (error) {
                setOpen(true);
                let errorMessage = error.message;
                if (error.code === "auth/invalid-credential") {
                    errorMessage = "Invalid credentials.";
                }
                if (error.code === "auth/email-already-in-use") {
                    errorMessage = "User already exists.";
                }
                setMessage({
                    severity: "error",
                    text: `Ah oh! We couldn't sign you in. ${errorMessage}`,
                });
            }
        },
    });

    const handleSignIn = () => {
        toggleSignIn(!isSignIn);
        formik.setTouched({}, false);
    };

    return (
        <div className="flex items-center justify-center bg-cover-pic h-screen bg-cover">
            <div className="box-border m-auto md:w-1/3 w-full p-10 bg-black bg-opacity-80 text-white z-10">
                <h1 className="text-white md:text-2xl text-xl font-bold">
                    {isSignIn ? `Sign In` : `Sign Up`}
                </h1>
                <form className="flex flex-col max-h-[75vh] overflow-y-auto z-10" onSubmit={formik.handleSubmit}>
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
                        <p className="text-red-600 text-[10px] ml-4">
                            {formik.errors.name}
                        </p>
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
                        <p className="text-red-600 text-[10px] ml-4">
                            {formik.errors.email}
                        </p>
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
                        <p className="text-red-600 text-[10px] ml-4">
                            {formik.errors.password}
                        </p>
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
                        <p className="text-red-600 text-[10px] ml-4">
                            {formik.errors.confirmPassword}
                        </p>
                    ) : null}
                    <button type="submit" className="m-4 p-2 bg-red-500">
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
            {message.text && (
                <SnackbarAlert
                    open={open}
                    handleClose={() => setOpen(false)}
                    message={message}
                />
            )}
        </div>
    );
};

export default Login;
