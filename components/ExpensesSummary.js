import { Text, View } from 'react-native';
const ExpensesSummary = ({ expenses }) => {
  return (
    <View>
      <Text>Last 7 days</Text>
      <Text>$177.95</Text>
    </View>
  );
};

export default ExpensesSummary;