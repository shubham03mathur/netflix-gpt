import Header from "./Header";

const AppLayout = ({ children }) => {   
    return (
        <div className="">
            <Header />
            <div className="box-border">{children}</div>
        </div>
    );
};

export default AppLayout;