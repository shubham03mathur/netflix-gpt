import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import { SIGNOUT } from './actions';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ['user'],
};

const appReducer = combineReducers({
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
});

const rootReducer = (state, action) => {
    if (action.type === SIGNOUT) {
        // Reset only specific slices or reset the entire state
        state = undefined; // Optionally reset the whole state
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

const persistor = persistStore(appStore);

export { appStore, persistor };
