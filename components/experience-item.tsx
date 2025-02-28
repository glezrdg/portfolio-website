import { MapPin } from "lucide-react"

interface ExperienceItemProps {
  title: string
  organization: string
  period: string
  location: string
}

export function ExperienceItem({ title, organization, period, location }: ExperienceItemProps) {
  return (
    <div className="border-l-4 border-primary pl-4 py-1">
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-primary font-medium">{organization}</p>
      <div className="flex justify-between text-muted-foreground text-sm mt-1">
        <span>{period}</span>
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {location}
        </span>
      </div>
    </div>
  )
}

