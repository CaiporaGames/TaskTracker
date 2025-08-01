import type { Task } from "../types/task"
import { TaskItem } from "./TaskItem"

interface Props {
  tasks: Task[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskList({ tasks, onToggle, onDelete }: Props) 
{
  return (
    <div>
      {tasks.length === 0 && <p className="text-gray-400">No tasks yet.</p>}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
