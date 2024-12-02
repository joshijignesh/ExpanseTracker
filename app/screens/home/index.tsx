import FloatingButton from "@components/FloatingButton";
import Header from "@components/Header";
import { ReactElement } from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { useHomeScreenController } from "./controller";
import ExpenseCard from "@components/ExpenseCard";
import EmptyState from "@components/EmptyState";

function HomeScreen(): ReactElement {
  const { sortedExpenses, handleDeleteExpense, email } = useHomeScreenController();

  const renderEmptyState = () => (
    <EmptyState
      title="No Expenses Yet"
      description={`Hi ${email}, Looks like you haven't added any expenses. Start by adding your first one!`}
    />
  );

  return (
    <View style={styles.screenContainer}>
      <Header title="Expense Tracker" showLeftButton={false} />

      {sortedExpenses.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={sortedExpenses}
          renderItem={({ item }) => (
            <ExpenseCard
              expense={item}
              onDelete={() => handleDeleteExpense(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}

      <FloatingButton />
    </View>
  );
};


export default HomeScreen

