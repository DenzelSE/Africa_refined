"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const SidebarContext = React.createContext<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isOpen: true,
  setIsOpen: () => {},
})

function SidebarProvider({
  children,
  defaultIsOpen = true,
}: {
  children: React.ReactNode
  defaultIsOpen?: boolean
}) {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">{children}</div>
    </SidebarContext.Provider>
  )
}

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

const Sidebar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()

    return (
      <div
        ref={ref}
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "relative hidden h-screen flex-col border-r bg-background p-4 data-[state=closed]:w-[60px] data-[state=open]:w-[280px] md:flex",
          className,
        )}
        {...props}
      />
    )
  },
)
Sidebar.displayName = "Sidebar"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex flex-1 flex-col gap-4 overflow-hidden", className)} {...props} />
  },
)
SidebarContent.displayName = "SidebarContent"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex h-14 items-center gap-2", className)} {...props} />
  },
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex items-center gap-2", className)} {...props} />
  },
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />
  },
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()

    if (!isOpen) {
      return null
    }

    return <div ref={ref} className={cn("text-xs font-medium uppercase text-muted-foreground", className)} {...props} />
  },
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
  },
)
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
  },
)
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex flex-col", className)} {...props} />
  },
)
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarMenuSub = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("ml-4 flex flex-col gap-1", className)} {...props} />
  },
)
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive?: boolean
  }
>(({ className, isActive, ...props }, ref) => {
  const { isOpen } = useSidebar()

  return (
    <button
      ref={ref}
      data-active={isActive ? true : undefined}
      className={cn(
        "flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 hover:bg-accent data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
        isOpen ? "justify-start" : "justify-center",
        className,
      )}
      {...props}
    />
  )
})
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()

    if (!isOpen) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "ml-auto flex h-6 items-center rounded-md bg-primary/10 px-1.5 text-xs font-medium text-primary",
          className,
        )}
        {...props}
      />
    )
  },
)
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarRail = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen, setIsOpen } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn(
          "absolute right-0 top-0 h-full w-1 -translate-x-1/2 cursor-col-resize bg-transparent hover:bg-accent/50",
          className,
        )}
        onMouseDown={(e) => {
          e.preventDefault()
          const startX = e.pageX
          const handleMouseMove = (e: MouseEvent) => {
            const width = Math.max(60, Math.min(280, startX + 280 - e.pageX))
            setIsOpen(width > 170)
          }
          const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
          }
          document.addEventListener("mousemove", handleMouseMove)
          document.addEventListener("mouseup", handleMouseUp)
        }}
        {...props}
      />
    )
  },
)
SidebarRail.displayName = "SidebarRail"

const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen, setIsOpen } = useSidebar()

    return (
      <button
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md border bg-transparent hover:bg-accent hover:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </button>
    )
  },
)
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex h-screen flex-col", className)} {...props} />
  },
)
SidebarInset.displayName = "SidebarInset"

export {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarRail,
  SidebarTrigger,
  SidebarInset,
}

