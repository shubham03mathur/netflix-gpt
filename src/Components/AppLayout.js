import Header from "./Header";

const AppLayout = ({ children }) => {   
    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    );
};

export default AppLayout;