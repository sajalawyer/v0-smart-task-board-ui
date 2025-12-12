import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TaskColumn } from "@/components/task-column"

export default function Home() {
  const todoTasks = [
    {
      id: "1",
      title: "Design new landing page",
      description: "Create mockups and wireframes for the homepage redesign",
    },
    {
      id: "2",
      title: "Update documentation",
      description: "Add API reference guides and code examples",
    },
    {
      id: "3",
      title: "Review pull requests",
      description: "Check and approve pending PRs from the team",
    },
  ]

  const inProgressTasks = [
    {
      id: "4",
      title: "Implement user authentication",
      description: "Set up OAuth with Google and GitHub providers",
    },
    {
      id: "5",
      title: "Database migration",
      description: "Migrate from PostgreSQL 14 to 15 with zero downtime",
    },
    {
      id: "6",
      title: "Fix responsive layout",
      description: "Ensure mobile breakpoints work correctly on all pages",
    },
  ]

  const doneTasks = [
    {
      id: "7",
      title: "Setup CI/CD pipeline",
      description: "Configure automated testing and deployment workflows",
    },
    {
      id: "8",
      title: "Optimize image loading",
      description: "Implement lazy loading and WebP format conversion",
    },
    {
      id: "9",
      title: "Security audit",
      description: "Complete penetration testing and fix vulnerabilities",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Smart Task Board</h1>
          <p className="mt-2 text-muted-foreground">Organize your tasks efficiently with our intuitive kanban board</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Add Task Form */}
        <div className="mb-8 rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Add New Task</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="task-title" className="mb-2 block text-sm font-medium text-foreground">
                Task title
              </label>
              <Input id="task-title" placeholder="Enter task title..." className="w-full" />
            </div>
            <div>
              <label htmlFor="task-description" className="mb-2 block text-sm font-medium text-foreground">
                Optional description
              </label>
              <Textarea
                id="task-description"
                placeholder="Add more details about this task..."
                className="w-full resize-none"
                rows={3}
              />
            </div>
            <Button className="w-full sm:w-auto">Add Task</Button>
          </div>
        </div>

        {/* Task Columns */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TaskColumn title="To Do" tasks={todoTasks} />
          <TaskColumn title="In Progress" tasks={inProgressTasks} />
          <TaskColumn title="Done" tasks={doneTasks} />
        </div>
      </main>
    </div>
  )
}
