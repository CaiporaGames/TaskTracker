import { useEffect, useState } from "react";
import type { Task } from "./types/task";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles/App.module.css";

const STORAGE_KEY = "task-tracker.tasks";

function loadTasks(): Task[] 
{
  try 
  {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch 
  {
    return [];
  }
}

function saveTasks(tasks: Task[]) 
{
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function App() 
{
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => 
  {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => 
  {
    const newTask: Task = { id: uuidv4(), title, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => 
  {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => 
  {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.cardWrapper}>
        <h1 className={styles.title}>📝 Task Tracker</h1>
        <TaskInput onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
