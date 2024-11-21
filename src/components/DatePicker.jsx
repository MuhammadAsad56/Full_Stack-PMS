"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { addAppointment } from "@/actions/appointment"
import ButtonSpinner from "./ButtonSpinner"

export function DatePicker({ session, request }) {
  const { toast } = useToast()
  const [date, setDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(false)
  const handleBookAppointment = async () => {
    const isDateInFuture = new Date() <= new Date(date)
    if (!isDateInFuture) return toast({ title: "Please Select Future date" })
      setIsLoading(true)
    const obj = {
      user: session.user._id,
      request: request,
      date: date
    }
    const res = await addAppointment(obj)
    setIsLoading(false)
    toast({ title: res.msg })
  }

  return (
    <div className="flex flex-col gap-3 my-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <div>
        {
          session ? (
            <Button onClick={handleBookAppointment} className={'w-full'}>{isLoading ? < ButtonSpinner/> : "Book Appointment"}</Button>
          ) : (
            <Link href={'/signin'}><Button className={'w-full'}>Login to Book Appointment</Button></Link>
          )
        }
      </div>
    </div>
  )
}
