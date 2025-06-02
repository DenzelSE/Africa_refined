"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface School {
  id: string
  name: string
}

interface MobileSchoolSelectorProps {
  schools: School[]
  activeSchool: string
  onSchoolChange: (schoolId: string) => void
}

export function MobileSchoolSelector({ schools, activeSchool, onSchoolChange }: MobileSchoolSelectorProps) {
  const activeSchoolName =
    activeSchool === "all" ? "All Schools" : schools.find((s) => s.id === activeSchool)?.name || "All Schools"

  return (
    <div className="md:hidden w-full mb-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {activeSchoolName}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuItem onClick={() => onSchoolChange("all")}>All Schools</DropdownMenuItem>
          {schools.map((school) => (
            <DropdownMenuItem key={school.id} onClick={() => onSchoolChange(school.id) }>
              {school.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
