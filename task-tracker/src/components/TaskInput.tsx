import { useState } from "react"
import type { FormEvent } from "react"

interface Props {
  onAdd: (title: string) => void
}

export function TaskInput({ onAdd }: Props) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title)
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border rounded px-3 py-2 flex-grow"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  )
}
