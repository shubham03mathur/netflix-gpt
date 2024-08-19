import { useState } from "react";
import Notification from "../Components/UI/Notification";
import SnackbarAlert from "../Components/UI/SnackbarAlert";

const MyAccount = () => {
    const [apiKey, setApiKey] = useState(
        localStorage.getItem("_apiToken")
            ? JSON.parse(localStorage.getItem("_apiToken"))
            : ""
    );

    const [open, setOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("_apiToken", JSON.stringify(apiKey));
        setOpen(true);
    };
    return (
        <>
        <div className="mt-40 p-4 flex flex-col justify-center items-center">
            <Notification
                severity="info"
                message="Please add your openAI API key here. This will be saved securely on your device locally. Please keep in mind as this is being saved locally, You can use GPT feature on this device only, this will not be shared across all your devices. To make them work, Please save the key on all desired devices."
            />
            <form
                className="flex flex-col md:flex-row justify-center items-center"
                onSubmit={handleSubmit}
            >
                <input
                    name="apikey"
                    required
                    className="p-2 m-2 border border-slate-800 outline-slate-800"
                    placeholder="Enter your openai key here..."
                    value={apiKey}
                    onChange={(event) => setApiKey(event.target.value)}
                />
                <button className="p-2 bg-slate-800 text-white">SAVE</button>
            </form>
        </div>
        {open && (
                <SnackbarAlert
                    open={open}
                    handleClose={() => setOpen(false)}
                    message={{
                        text: "Your credential was saved successfully!",
                        severity: "success"
                    }}
                />
            )}
        </>
    );
};

export default MyAccount;
