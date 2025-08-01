import { useState, type FormEvent } from "react";
import styles from "../styles/App.module.css"; // Reuse same CSS module

interface Props {
  onAdd: (title: string) => void;
}

export function TaskInput({ onAdd }: Props) 
{
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => 
{
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputRow}>
      <input
        className={styles.taskInput}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit" className={styles.addButton}>
        Add
      </button>
    </form>
  );
}
