import AsyncStorage from "@react-native-async-storage/async-storage";
import { ExpansesState } from "./expanses.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "app/model/expense";
import persistReducer from "redux-persist/es/persistReducer";

const initialState: ExpansesState = {
  expenses: [],
};

const persistConfig = {
  key: 'expanses',
  storage: AsyncStorage,
};

const expansesSlice = createSlice({
  name: 'expanses',
  initialState,
  reducers: {
    addExpense(state, action: PayloadAction<Expense>) {
      state.expenses.push(action.payload);
    },
    deleteExpense(state, action: PayloadAction<number>) {
      state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
    },
    setExpenses(state, action: PayloadAction<Expense[]>) {
      state.expenses = action.payload;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, expansesSlice.reducer);

export const { addExpense, deleteExpense, setExpenses } = expansesSlice.actions;

export default persistedReducer;