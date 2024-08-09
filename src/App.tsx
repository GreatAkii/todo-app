import Header from "./components/Header";
import TodoHero from "./components/TodoHero";
import TodoForm from "./components/TodoForm";
import { FieldValues } from "react-hook-form";
import { useEffect, useState } from "react";
import Task from "./components/Task";
import { TodoTask } from "./interfaces/TodoTask";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState<TodoTask[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks):[]
  });
  const onSubmit = (data: FieldValues) => {
    const newTask: TodoTask = {
      id: uuidv4(),
      title: data.task,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };
  const markOutTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  const updateTask = (id: string, task_title: string) => {
    setTasks(
      tasks.map(task => task.id === id ? {...task,title:task_title}:task)
    )
  }

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <TodoHero
        completed_todos={completedTasksCount}
        total_todos={tasks.length}
      />
      <TodoForm onSubmit={onSubmit} />
      {tasks.map((task) => (
        <Task
          key={task.title}
          taskobj={task}
          markOutTask={() => markOutTask(task.id)}
          updateTask={updateTask}
        />
      ))}
    </>
  );
};

export default App;
