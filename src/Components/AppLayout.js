import Header from "./Header";
import { GET_LANGUAGES } from "../utility/constant";

const AppLayout = ({ children }) => {   
    return (
        <div className="appLayout">
            <Header lang={GET_LANGUAGES}/>
            <>{children}</>
        </div>
    );
};

export default AppLayout;