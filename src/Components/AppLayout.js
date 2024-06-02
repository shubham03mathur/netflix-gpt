import Header from "./Header";

const AppLayout = (props) => {
    return (
        <>
            <Header />
            <div>{props.children}</div>
        </>
    );
};

export default AppLayout;