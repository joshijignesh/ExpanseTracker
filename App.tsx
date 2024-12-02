import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from "./app/navigation/RootNavigator.tsx";
import { Provider } from "react-redux";
import { persistor, store } from '@app-redux/store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

function App(): React.JSX.Element {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RootNavigator />
                </PersistGate>
            </Provider>
        </>
    )
}

export default App;
