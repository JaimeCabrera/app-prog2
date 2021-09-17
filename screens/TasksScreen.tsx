import React from "react";
import { StatusBar } from "react-native";
import TaskList from "../compoents/TaskList";

export const TasksScreen = ({ route, navigation }: any) => {
  const { categoryId } = route.params;
  return (
    <>
      <StatusBar backgroundColor="#2874A6" barStyle={"light-content"} />
      <TaskList categoryId={categoryId} />
    </>
  );
};
