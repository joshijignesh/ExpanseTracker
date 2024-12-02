import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PreferenceState } from './preference.types';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: PreferenceState = {
  categoryColors: {
    food: '#FF6347',
    fees: '#FF1493',
    transport: '#32CD32',
    entertainment: '#1E90FF',
  },
  weeklyLimit: '',
  monthlyLimit: '',
  error: null,
};

const persistConfig = {
  key: 'preferences',
  storage: AsyncStorage,
};

const preferenceSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategoryColor(state, action: PayloadAction<{ category: string; color: string }>) {
      state.categoryColors[action.payload.category] = action.payload.color;
    },
    setWeeklyLimit(state, action: PayloadAction<string>) {
      state.weeklyLimit = action.payload;
    },
    setMonthlyLimit(state, action: PayloadAction<string>) {
      state.monthlyLimit = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, preferenceSlice.reducer);

export const { setWeeklyLimit, setMonthlyLimit, setError, setCategoryColor } = preferenceSlice.actions;

export default persistedReducer;
