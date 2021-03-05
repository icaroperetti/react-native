import React from "react";
import {Text,StyleSheet, View, Button,TouchableOpacity} from "react-native";
import TaskItem from "../components/TaskItem";

const HomeScreen = (props) => {
    return (
      <View>
        <Text style={styles.textStyle}>Hello World</Text>
        <Text style={styles.textStyle2}>Hello World 2</Text>
        <Button 
          title="Tarefas"
          onPress={() => props.navigation.navigate('Task')}
        />

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Task')}>
          <Text>Tarefas</Text>
          <Text>Tarefas</Text>
        </TouchableOpacity>

        <Button 
          title="Counter"
          onPress={() => props.navigation.navigate('Counter')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:30
  },
  textStyle2:{
    color:'red'
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  taskColumn: {
    width: "70%",
  },
  dateColumn: {
    width: "30%",
  },
});

export default HomeScreen;