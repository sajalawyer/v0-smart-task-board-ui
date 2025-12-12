import { TaskCard } from "./task-card"

interface Task {
  id: string
  title: string
  description: string
}

interface TaskColumnProps {
  title: string
  tasks: Task[]
}

export function TaskColumn({ title, tasks }: TaskColumnProps) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card">
      {/* Column Header */}
      <div className="border-b border-border px-4 py-3">
        <h3 className="font-semibold text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{tasks.length} tasks</p>
      </div>

      {/* Task Cards */}
      <div className="flex-1 space-y-3 p-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  )
}
