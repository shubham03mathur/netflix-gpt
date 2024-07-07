import Layout from "./Components/Layout";
import { Provider } from "react-redux";
import appStore from "./utility/appStore";
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router';

function App() {
    return (
        <Provider store={appStore}>
            <RouterProvider router={ Router }>
                <Layout />
            </RouterProvider>
        </Provider>
    );
}

export default App;
