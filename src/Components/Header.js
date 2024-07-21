import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileMenu from "./UI/ProfileMenu";
const Header = (props) => {
    const location = useLocation();
    const user = useSelector((store) => store.user);
    const { pathname } = location;
    const isRoot = pathname === "/login";
    const classes = ["w-full", "px-8", "bg-gradient-to-t from-grey", "z-10"];
    if (isRoot) {
        classes.push("absolute");
    } else {
        classes.push("sticky");
    }
    return (
        <div className="box-border">
            <div className="flex justify-between">
                <img
                    className="w-52 cursor-pointer"
                    alt="logo"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                />
                {user && (
                    <div className="flex p-4 cursor-pointer">
                        <div className="mr-1">
                            <img
                                className="w-8"
                                alt="user avatar"
                                src={user?.userPhotoURL}
                            />
                        </div>
                        <ProfileMenu name={user?.displayName}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
