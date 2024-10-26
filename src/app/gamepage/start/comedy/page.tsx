'use client'
import Link from "next/link";
import React, { useState } from "react";

export default function GamePage() {
    const [input, setInput] = useState("");
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg shadow-xl flex flex-col space-y-5 items-center justify-end py-4">
                Comedy
            </div>
        </div>
    )
}