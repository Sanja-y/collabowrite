import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div className="bg-white text-slate-600 w-full h-[100vh] flex justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-[28px] font-semibold italic">Collab-o-write</h1>
                <Link href={"/gamepage"} className="text-[18px] italic hover:opacity-60 transition-all duration-100">Play</Link>
                <div className="flex space-x-12 my-5">
                    <Link href={"/login"} className="text-[18px] italic hover:opacity-60 transition-all duration-100">Login</Link>
                    <Link href={"/signup"} className="text-[18px] italic hover:opacity-60 transition-all duration-100">Signup</Link>
                </div>
            </div>
        </div>
    )
}