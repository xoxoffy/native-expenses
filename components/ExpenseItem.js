import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ExpenseItem = () => {
  return (
    <Pressable>
      <View>
        <View>
          <Text> DESCRIPTION </Text>
          <Text> DATE </Text>
        </View>
        <View>
          <Text>AMOUNT</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;
