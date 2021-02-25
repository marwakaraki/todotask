import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
interface IToDo {
  text: string;
  desc: string;
}
function Home({ navigation, route }) {
  const [tList, setTList] = useState<any>([]);
  const gofill = (): void => {
    navigation.navigate("fillTask");
  };

  React.useEffect(() => {
    if (route.params?.value) {
      setTList([...tList, { text: route.params?.value, desc: route.params?.value2 }])
    }
  }, [route.params?.value]);


  const removeItem = (index: number): void => {
    const newToDoList = [...tList];
    newToDoList.splice(index, 1);
    setTList(newToDoList);
  };

  return (
    <View style={styles.container}>
      
      <Text>Todo List</Text>
      <Button title="Add Task" onPress={gofill} />
      {tList.length === 0 && <Text>No to do task available</Text>}
      {tList.length !== 0 && (
        <FlatList
          data={tList}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.bli} key={`${index}_${item.text}`}>
                <Button
                  title="delete"
                  onPress={() => {
                    removeItem(index);
                  }}
                />
                <Text>
                  {item.text}
                  {"\n"}
                  {item.desc}
                  </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.text}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: "center",
  },
  bli: {
    flexDirection: "row",
  },
});
export default Home;