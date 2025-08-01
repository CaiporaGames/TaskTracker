import type { Task } from "../types/task"
import styles from "../styles/TaskItem.module.css"

interface Props {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskItem({ task, onToggle, onDelete }: Props) 
{
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskLeft}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 accent-blue-600"
        />
        <span className={`${styles.taskText} ${task.completed ? styles.done : ""}`}>
          {task.title}
        </span>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  )
}
