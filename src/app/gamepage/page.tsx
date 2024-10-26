'use client'
import Link from "next/link";
import React, { useState } from "react";
import { SelectStoryMode } from "./components/SelectStoryMode";
import { useToast } from "@/hooks/use-toast"

export default function GamePage() {
    const [mode, setMode] = useState("");
    const { toast } = useToast();

    const handleClick = (e) => {
        if (mode === "") {
            e.preventDefault(); // prevent navigation
            toast({
                title: "Please select a mode.",
            });
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg shadow-xl flex flex-col space-y-5 items-center justify-end py-4">
                <SelectStoryMode setMode={setMode} />
                <Link
                    href={mode !== `` ? `/gamepage/start/${mode}` : ''}
                    className="text-[18px] italic hover:opacity-60 transition-all duration-100"
                    onClick={(e)=>{handleClick(e)}} >Start</Link>

            </div>
        </div>
    )
}