import React from "react";
import { Text, StyleSheet, View, Image,TouchableOpacity} from "react-native";


const TaskItem = (props) => {
  console.log(props)

  return (
    <View style={styles.container}>
      <Image style={styles.imageColumn} source={require('../../assets/task1.png')}></Image>
      <Text style={styles.descColumn}>{props.task.description}</Text>
      <Text style={styles.dateColumn}>{props.task.date}</Text>

      <TouchableOpacity style={styles.removeColumn} onPress={() => {props.removeTask(props.task.id)}}>
        <Text style={styles.xColor}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: 20,
    marginRight:15
  },
  imageColumn: {
    width: '10%',
    resizeMode: 'contain'
  },
  descColumn: {
    width: '60%',
  },
  dateColumn: {
    width: '25%',
  },
  removeColumn: {
    width: '5%',
    alignItems: 'center',
    backgroundColor: "#FF0000",
  },
  xColor:{
    color:'white'
  }
});

export default TaskItem;
