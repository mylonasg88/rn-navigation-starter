import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const TODO_DONE = "DONE";
const TODO_TODO = "TODO";

const todos = () => {
  let _todos = [];
  for (let i = 1; i < 50; i++) {
    _todos.push({
      id: i,
      title: "Something to do " + i,
      details: "Some text here about the todo",
      status: false,
    });
  }
  return _todos;
};

const Todos = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos()}
        renderItem={(item) => <Todo {...item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Todos;

const Todo = ({ item }) => {
  const [status, setStatus] = useState(false);

  return (
    <View style={styles.row}>
      <CheckBox
        disabled={false}
        value={status}
        onValueChange={(newValue) => {
          setStatus(newValue);
        }}
      />
      <Text>{item.title}</Text>
    </View>
  );
};

//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: 60,
    borderWidth: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    // textAlign: "center",
    backgroundColor: "#ccc",
  },
});
