import React, { useState } from "react";
import {Text,StyleSheet, View, Button, FlatList,TouchableOpacity} from "react-native";
import TaskItem from "../components/TaskItem";

const TaskScreen = () => {

    let [tasks, setTasks] = useState([]);

    const removeTask = (id) => {
      let filteredList = tasks.filter((task) => task.id != id);
      setTasks(filteredList);
    }

    //Props
    return (
      <View>
        <TouchableOpacity style={styles.taskBtn} onPress={() => {
          setTasks([...tasks, newTask()])
        }}>
          <Text>Gerar Tarefa</Text>
        </TouchableOpacity>

        <FlatList
          style={styles.tasksList}
          keyExtractor={(task) => task.id}
          data={tasks}
          renderItem={(element) => {
            return <TaskItem task={element.item} removeTask={ removeTask } />
          }}
        />
      </View>
    );
}

const newTask = () => {
  let id = Math.random();
  let date = new Date();

  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  return {id: `${id}`,description: `Tarefa #${id}`,date: `${day}/${month}/${year}`}
}



const styles = StyleSheet.create({
    tasksList:{
        marginTop:20,
    },
    taskBtn:{
      marginTop: 20,
      alignItems: 'center',
      backgroundColor: "#DDDDDD",
      padding: 10,
      borderWidth:1,
      borderRadius:5,
    }
   
});

export default TaskScreen;
