import { useState, useEffect } from "react"
import type { Task } from "./types/task"
import { TaskInput } from "./components/TaskInput"
import { TaskList } from "./components/TaskList"
import { v4 as uuidv4 } from "uuid"

const STORAGE_KEY = "task-tracker.tasks";

function loadTasks(): Task[] 
{
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
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

  const addTask = (title: string) => {
    const newTask: Task = { id: uuidv4(), title, completed: false }
    setTasks(prev => [...prev, newTask])
    

  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">📝 Task Tracker</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
