import { useSelector } from "react-redux";
import ProfileMenu from "./UI/ProfileMenu";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleIsGPTVisible } from "../utility/gptSlice";

import { useMemo, memo } from "react";

const Header = ({ lang }) => {
    const visibleLang = useMemo(() => {
        return lang.map((l) => (
            <option key={l.identifier} value={l.identifier}>
                {l.name}
            </option>
        ));
    }, [lang]);

    const dispatch = useDispatch();
    const user = useSelector((store) => store?.user);
    const isGPTVisible = useSelector((store) => store?.gpt?.isGPTVisible);

    const toggleGPTSearch = () => dispatch(toggleIsGPTVisible());

    return (
        <div className="z-50 absolute top-0 left-0 w-full box-border flex md:flex-row flex-col items-center justify-between z-100 bg-slate-800">
            <Link to="/browse">
                <img
                    className="w-24 md:w-52 cursor-pointer"
                    alt="logo"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                />
            </Link>

            {user && (
                <div className="flex p-2 md:p-4 align-middle">
                    <select className="h-max cursor-pointer rounded-lg p-2 md:p-2 mx-2 bg-gray-900 text-white ">{visibleLang}</select>
                    <button
                        onClick={toggleGPTSearch}
                        className="h-max opacity-100 cursor-pointer rounded-lg p-1.5 mx-4 bg-gradient-to-tl from-purple-800 text-white"
                    >
                        {isGPTVisible ? "Browse" : "GPT Search"}
                    </button>
                    <div className="mr-1 cursor-pointer">
                        <img
                            className="w-8"
                            alt="user avatar"
                            src={user?.userPhotoURL}
                        />
                    </div>
                    <ProfileMenu name={user?.displayName} />
                </div>
            )}
        </div>
    );
};

export default memo(Header);
