import Layout from "./Components/Layout";
import { Provider } from "react-redux";
import appStore from "./utility/appStore";

function App() {
    return (
        <Provider store={appStore}>
            <Layout />
        </Provider>
    );
}

export default App;
