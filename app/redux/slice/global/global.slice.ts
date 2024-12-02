import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalState } from './global.types';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: GlobalState = {
  isLoggedIn: false,
  userEmail: ''
};

const persistConfig = {
  key: 'global',
  storage: AsyncStorage, 
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setUserEmail(state, action: PayloadAction<string>){
      state.userEmail = action.payload;
    }
  },
});

const persistedReducer = persistReducer(persistConfig, globalSlice.reducer);

export const { setIsLoggedIn, setUserEmail } = globalSlice.actions;
export default persistedReducer;
