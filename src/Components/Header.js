import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileMenu from "./UI/ProfileMenu";
import { useDispatch } from "react-redux";

import { toggleIsGPTVisible } from "../utility/gptSlice";
const Header = (props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((store) => store?.user);
    const isGPTVisible = useSelector(store => store?.gpt?.isGPTVisible);
    const { pathname } = location;
    const isRoot = pathname === "/login";
    const classes = ["w-full", "px-8", "bg-gradient-to-t from-grey", "z-10"];
    if (isRoot) {
        classes.push("absolute");
    } else {
        classes.push("sticky");
    }

    const toggleGPTSearch = () => dispatch(toggleIsGPTVisible());

    return (
        <div className="z-50 absolute top-0 left-0 w-full box-border flex justify-between z-100">
            <img
                className="w-52 cursor-pointer"
                alt="logo"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            />

            {user && (
                <div className="flex p-4">
                    <button
                        onClick={toggleGPTSearch}
                        className="h-max cursor-pointer rounded-lg p-1.5 mx-4 bg-gradient-to-tl from-purple-800 text-white"
                    >
                        {isGPTVisible ? 'Home' : 'GPT Search'}
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

export default Header;
