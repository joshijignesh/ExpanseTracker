import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '@app-redux/slice/global/global.slice';
import expansesReducer from '@app-redux/slice/expanses/expanses.slice';
import preferencesReducer from '@app-redux/slice/preference/preference.slice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    preferences: preferencesReducer,
    expanses:  expansesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
        ignoredActionPaths: ['payload.register'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
