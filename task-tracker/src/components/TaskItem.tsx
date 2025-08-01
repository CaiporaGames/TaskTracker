import type { Task } from "../types/task"


interface Props {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <div className="flex justify-between items-center mb-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.title}
        </span>
      </label>
      <button onClick={() => onDelete(task.id)} className="text-red-600 hover:underline">
        Delete
      </button>
    </div>
  )
}
