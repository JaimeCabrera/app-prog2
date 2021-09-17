import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

import { getTasksById } from "../services/task.services";
import LoadingIndicator from "./LoadingIndicator";

interface Itask {
  id: Number;
  name: String;
}

const TaskList = ({ categoryId }: any) => {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleTasks(categoryId);
  }, [categoryId]);

  const handleTasks = async (id: Number) => {
    setLoading(true);
    const { tasks } = await getTasksById(id);
    setTasks(tasks);
    setLoading(false);
  };
  return loading ? (
    <LoadingIndicator />
  ) : (
    <View style={{ width: "100%", flex: 1 }}>
      {tasks.map((task, index) => {
        return (
          <SafeAreaView
            style={{ flexDirection: "column", width: "100%" }}
            key={index.toString()}
          >
            <View style={styles.viewTask}>
              <Text style={styles.taskTitle}>{task.name}</Text>
              <TouchableOpacity>
                <Icon style={styles.icon} name="clear" color="#909497" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );
      })}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  viewTask: {
    flexDirection: "row",
    width: "100%",
    margin: 5,
    padding: 15,
    backgroundColor: "#E5E5E5",
    marginVertical: 0,
    marginHorizontal: 1,
    borderBottomColor: "#B3B6B7",
    borderLeftColor: "#eee",
    borderRightColor: "#eee",
    borderTopColor: "#eee",
    borderWidth: 1,
    justifyContent: "space-between",
  },
  taskTitle: {
    color: "#34495E",
    fontWeight: "bold",
  },
  icon: {
    color: "#909497",
  },
});
