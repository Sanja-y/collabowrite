"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useAppDispatch } from '@/lib/store';
import { setName } from '@/lib/user-slice';

const frameworks = [
  {
    value: "action",
    label: "Action",
  },
  {
    value: "comedy",
    label: "Comedy",
  },
  {
    value: "romance",
    label: "Romance",
  },
  {
    value: "fantasy",
    label: "Fantasy",
  },
]

interface SelectStoryModeProps {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
}

export  const SelectStoryMode: React.FC <SelectStoryModeProps> = ({input, setInput}) =>  {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const dispatch = useAppDispatch();


  const handleSetName = () => {
    dispatch(setName(input));
    console.log(input)
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role=""
          aria-expanded={open}
          className="w-[200px] justify-between shadow-"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select genre..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Select genre..." />
          <CommandList>
            <CommandEmpty>No genre found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setInput(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    handleSetName();

                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
