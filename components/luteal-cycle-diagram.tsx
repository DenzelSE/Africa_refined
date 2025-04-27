"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LutealCycleDiagram() {
  const [activePhase, setActivePhase] = useState<string>("menstrual")

  const phases = [
    {
      id: "menstrual",
      name: "Menstrual Phase",
      days: "Days 1-5",
      description: "The uterine lining sheds, resulting in menstrual flow. Hormone levels are at their lowest.",
      color: "bg-pink-900",
    },
    {
      id: "follicular",
      name: "Follicular Phase",
      days: "Days 1-13",
      description: "Follicles in the ovary develop, and estrogen levels rise, causing the uterine lining to thicken.",
      color: "bg-pink-700",
    },
    {
      id: "ovulatory",
      name: "Ovulatory Phase",
      days: "Days 14",
      description: "A mature egg is released from the ovary and moves into the fallopian tube.",
      color: "bg-pink-500",
    },
    {
      id: "luteal",
      name: "Luteal Phase",
      days: "Days 15-28",
      description:
        "The corpus luteum produces progesterone to prepare for potential pregnancy. If no pregnancy occurs, hormone levels drop, leading back to the menstrual phase.",
      color: "bg-pink-400",
    },
  ]

  return (
    <div className="bg-pink-150 my-10">
      <h3 className="text-3xl font-bold mb-4 text-center text-pink-500">The Menstrual Cycle</h3>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {phases.map((phase) => (
          <Button
            key={phase.id}
            variant={activePhase === phase.id ? "default" : "outline"}
            className={activePhase === phase.id ? phase.color : ""}
            onClick={() => setActivePhase(phase.id)}
          >
            {phase.name}
          </Button>
        ))}
      </div>

      <div className="relative h-[60px] bg-gray-100 rounded-full overflow-hidden mb-4">
        {phases.map((phase, index) => {
          const width = index === 0 ? "w-[15%]" : index === 1 ? "w-[35%]" : index === 2 ? "w-[5%]" : "w-[45%]"
          const left = index === 0 ? "left-0" : index === 1 ? "left-[15%]" : index === 2 ? "left-[50%]" : "left-[55%]"

          return (
            <div
              key={phase.id}
              className={`absolute top-0 bottom-0 ${width} ${left} ${phase.color} ${activePhase === phase.id ? "opacity-100" : "opacity-60"} transition-opacity`}
            >
              <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                {phase.days}
              </span>
            </div>
          )
        })}
      </div>

      {phases.map((phase) => (
        <div
          key={phase.id}
          className={`p-4 rounded-md ${activePhase === phase.id ? "block" : "hidden"} ${phase.color} bg-opacity-10`}
        >
          <h4 className="font-bold mb-2">
            {phase.name} ({phase.days})
          </h4>
          <p>{phase.description}</p>
        </div>
      ))}
    </div>
  )
}
