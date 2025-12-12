import { Button } from "@/components/ui/button"
import { ArrowRight, Trash2 } from "lucide-react"

interface TaskCardProps {
  title: string
  description: string
}

export function TaskCard({ title, description }: TaskCardProps) {
  return (
    <div className="rounded-md border border-border bg-background p-4 shadow-sm transition-shadow hover:shadow-md">
      <h4 className="mb-2 font-medium text-foreground">{title}</h4>
      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
          <ArrowRight className="mr-1.5 h-4 w-4" />
          Move
        </Button>
        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
          <Trash2 className="mr-1.5 h-4 w-4" />
          Delete
        </Button>
      </div>
    </div>
  )
}
