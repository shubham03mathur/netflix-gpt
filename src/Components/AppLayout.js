import Header from "./Header";

const AppLayout = ({ children }) => {   
    return (
        <>
            <div className="box-border absolute w-full px-8 bg-gradient-to-t from-black"><Header /></div>
            <div className="box-border">{children}</div>
        </>
    );
};

export default AppLayout;