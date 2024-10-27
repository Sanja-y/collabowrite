'use client'
import Link from "next/link";
import React, { useState } from "react";
import { SelectStoryMode } from "./components/SelectStoryMode";
import { useToast } from "@/hooks/use-toast"  
import { useAppSelector } from '@/lib/store';


export default function GamePage() {
    const [input, setInput] = useState("");
    const { toast } = useToast();
    const name = useAppSelector((state) => state.user.name);
    const handleClick = (e) => {
        if (name === "") {
            e.preventDefault(); // prevent navigation
            toast({
                title: "Please select a mode.",
            });
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg shadow-xl flex flex-col space-y-5 items-center justify-end py-4">
                <SelectStoryMode input={input} setInput={setInput} />
                <Link
                    href={name !== `` ? `/gamepage/start/pre` : ''}
                    className="text-[18px] italic hover:opacity-60 transition-all duration-100"
                    onClick={(e)=>{handleClick(e)}} >Create Game</Link>

            </div>
        </div>
    )
}