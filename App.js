import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { useState } from 'react';
import Header from './Components/Header.js';
import Form from './Components/Form.js';
import Tasks from './Components/Tasks.js';

export default function App() {
  const [tasks,setTasks]=useState([]);
 
  const handleAdd = (taskName) => {
    if(taskName.length>=3){
      const tempTask={name:taskName,id:tasks.length+1};
      setTasks([...tasks,tempTask]);
    } else {
        Alert.alert("Invalid Task","The task must be 3 characters long",[{
          text:"Close"
        }])
    }
  }
 
  const handleTouch = (id) => {
    setTasks(tasks.filter(task => task.id!==id));
  }

  return (
    
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={styles.container}>
        <Header/>
        <Form handleAdd={handleAdd} />
        <Tasks handleTouch={handleTouch} tasks={tasks} />
        <StatusBar backgroundColor='#aaa'/> 
        </View>
      </TouchableWithoutFeedback>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:33,
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#ccc',
    padding:10, 
  },
});
