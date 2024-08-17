import Layout from "./Components/Layout";
import { Provider } from "react-redux";
import { appStore, persistor } from "./utility/appStore";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    return (
        <Provider store={appStore}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={Router}>
                    <Layout />
                </RouterProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
