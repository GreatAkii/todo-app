import Header from "./components/Header";
import TodoHero from "./components/TodoHero";
import TodoForm from "./components/TodoForm";
import { FieldValues } from "react-hook-form";
import { useEffect, useState } from "react";
import Task from "./components/Task";
import { TodoTask } from "./interfaces/TodoTask";

const App = () => {
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  const onSubmit = (data: FieldValues) => {
    const newTask: TodoTask = {
      id: tasks.length,
      title: data.task,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };
  const markOutTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

  useEffect(() => {
    console.log(tasks);
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
        />
      ))}
    </>
  );
};

export default App;
