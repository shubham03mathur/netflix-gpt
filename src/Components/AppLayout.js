import Header from "./Header";

const AppLayout = ({ children }) => {   
    return (
        <div className="appLayout">
            <Header />
            <>{children}</>
        </div>
    );
};

export default AppLayout;