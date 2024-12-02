import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "@app-redux/slice/expanses/expanses.slice"; 
import { RootState } from "@app-redux/store/store";

export const useHomeScreenController = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state: RootState) => state.expanses.expenses); 
  const email = useSelector((state: RootState) => state.global.userEmail)

  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime());

  const handleDeleteExpense = (id: number) => {
    dispatch(deleteExpense(id));
  };

  return { sortedExpenses, handleDeleteExpense, email };
};
