import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function Form({handleAdd}){
    const [taskName,setTaskName]=useState("");
    return(
        <View style={styles.form}>
        <Text>Add Task : </Text>
        <TextInput onChangeText={(val) => setTaskName(val)} style={styles.input} placeholder="Task"/>
        <Button title='ADD' color='grey' onPress={() => handleAdd(taskName)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderRadius:5,
        marginVertical:10,
        paddingHorizontal:10,
        backgroundColor:"#fff"
      },
      form:{
        width:"100%"
      }
})