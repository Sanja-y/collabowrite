'use client'
import Link from "next/link";
import React, { useState } from "react";
// import { SelectStoryMode } from "../components/SelectStoryMode";
import { useToast } from "@/hooks/use-toast"

export default function StartPage() {
    const [input, setInput] = useState("");
    const { toast } = useToast();

    const handleClick = (e) => {
        if (input === "") {
            e.preventDefault(); // prevent navigation
            toast({
                title: "Please select a mode.",
            });
        }
    };

    function toggleShareOptions() {
        const options = document.getElementById('share-options');
        options.style.display = options.style.display === 'none' ? 'block' : 'none';
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg shadow-xl flex flex-col space-y-5 items-center justify-between py-4">
                {/* <SelectStoryMode , setInput={, setInput} /> */}
                <div>
                    <div className="share-button">
                        <button onClick={toggleShareOptions}>Share Link </button>
                        <div id="share-options" style={{ display: "none" }}>
                            <a href="https://facebook.com/sharer/sharer.php?u=YOUR_LINK" target="_blank">Facebook</a>
                            <a href="https://twitter.com/intent/tweet?url=YOUR_LINK&text=Check%20this%20out!" target="_blank">Twitter</a>
                            <a href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_LINK" target="_blank">LinkedIn</a>
                            <a href="mailto:?subject=Check%20this%20story&body=See%20this%20amazing%20story%20at%20YOUR_LINK" target="_blank">Email</a>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link
                        href={input !== `` ? `/gamepage/start/${input}` : ''}
                        className="text-[18px] italic hover:opacity-60 transition-all duration-100"
                        onClick={(e) => { handleClick(e) }} >Start Game</Link>
                    <Link href={'/gamepage'}>Back</Link>

                </div>
            </div>
        </div>
    )
}