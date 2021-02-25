import React, { useState } from "react";
import { FlatList,StyleSheet, Text, View, TextInput, Button } from "react-native";
export default function fillTask({navigation}) {
    const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const handleSubmit = (): void => {
    if(value!=""){
    setValue("");
    setValue2("");
    }
    navigation.navigate('Home',{
        value: value,
        value2: value2,
      });
  };
  return (
  <View style={styles.container}>
<View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter name"
          value={value}
          onChangeText={e => {
            setValue(e); 
          }}
          style={styles.inputBox}
        />
         <TextInput
          placeholder="Enter desc"
          value2={value2}
          onChangeText={e => {
            setValue2(e);  
          }}
          style={styles.inputBox}
        /> 
      </View>
      <Button
            title="submit"
         onPress={handleSubmit}    
          />
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: "center",
  },
    inputWrapper: {
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 20
    },
    inputBox: {
      width: 200,
      borderRadius: 8,
      borderWidth: 2,
      paddingLeft: 8
    },
  });