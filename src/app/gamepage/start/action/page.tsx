'use client'
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'



export default function GamePage() {
    // const [mode, setMode] = useState("");
    const router = useRouter()
    const [story, setStory] = useState("In the heart of the city, where shadows moved faster than bullets, a man with nothing left to lose stepped out of the darkness, his hand steady on the trigger ");
    const [addition, setAddition] = useState("");
    const [noOfAdditions, setNoOfAdditions] = useState<number>(0);
    const LinkToEnd = () => {
        if (noOfAdditions === 4) {
            router.push('/gamepage/end')
        }
    }

    const Header = () => {
        return (
            <div className="w-full flex justify-between py-2 px-2 mb-6">
                <h1 className=" text-[1.5rem]">Collab-o-write</h1>
                <div className="flex space-x-2 text-[0.9rem]">
                    <button>Login</button>
                    <button>Sign-up</button>
                </div>
            </div>
        )
    }
    const HeroSection = () => {
        const CurrentStory = () => {
            return (
                <div className="w-full flex flex-col space-y-2 mb-4">
                    <h1 className=" text-[1.2rem]">Current Story Progression</h1>
                    <div className="bg-orange-200 h-fit max-h-[15rem] rounded-md px-4 py-4 text-opacity-30">
                        <p className="text-[1rem]">
                            {story}
                        </p>
                    </div>
                </div>
            )
        }
        const AddToStory = () => {
            return (
                <div className="w-full flex flex-col space-y-2 mb-4">
                    <h1 className=" text-[1.2rem]">Add to the story</h1>
                    <div className="min-h-[10rem] max-h-[15rem] rounded-md text-opacity-30">
                        <textarea
                            className="w-full min-h-[10rem] bg-orange-100 px-2 py-4 ring-0 outline-none rounded-md"
                            value={addition}
                            onChange={(e) => { setAddition(e.currentTarget.value); }}
                            placeholder="Add your sentence or paragraph!"
                        />
                        <button
                            onClick={() => { setStory(prevValues => prevValues + addition); setNoOfAdditions(prevValues => prevValues + 1); setAddition(""); LinkToEnd(); }}
                            className="text-[0.8rem] text-white px-4 py-1 rounded-lg bg-orange-400"
                        >Submit</button>
                    </div>
                </div>
            )
        }
        const AISuggestion = () => {
            return (
                <div className="w-full flex flex-col space-y-2 mb-4">
                    <h1 className=" text-[1.2rem]">AI Suggestion</h1>
                    <div className="bg-slate-200 h-fit max-h-[15rem] rounded-md px-4 py-4 text-opacity-30">
                        <p className="text-[1rem]">
                            As the prince explored the forest, he stumbled upon a hidden treasure chest...
                        </p>
                        <button
                            onClick={() => { setStory(prevValues => prevValues + addition); setNoOfAdditions(prevValues => prevValues + 1); setAddition(""); LinkToEnd(); }}
                            className="text-[0.8rem] my-3 text-white px-4 py-1 rounded-lg bg-orange-400"
                        >Add AI Suggestion</button>
                    </div>
                </div>
            )
        }
        return (
            <div className=" w-[75%] h-full fl">
                <CurrentStory />
                <AddToStory />
                <AISuggestion />
            </div>
        )
    }
    const VoteSection = () => {
        const ContributionCard = () => {
            return (
                <div className="w-[85%] h-[7rem] bg-white rounded-lg px-2 py-3 flex flex-col justify-between">
                    <p className="text-wrap">
                        He set out on a quest to find the legendary dragon...
                    </p>
                    <button
                        onClick={() => { setStory(prevValues => prevValues + addition); setNoOfAdditions(prevValues => prevValues + 1); setAddition(""); LinkToEnd(); }}
                        className="text-[0.8rem] w-fit text-white px-4 py-1 rounded-lg bg-orange-400 mx-2"
                    >Vote</button>
                </div>
            )
        }
        return (
            <div className="w-[25%] flex flex-col space-y-2 bg-gray-200 bg-opacity-40 px-4 py-2" >
                <h1 className=" text-[1.2rem]">Vote Contributions</h1>
                <div className="flex flex-col justify-center items-center space-y-4 w-full">
                    <ContributionCard />
                    <ContributionCard />
                    <ContributionCard />
                </div>
            </div>
        )
    }


    return (
        <div className="w-full px-4 py-2">
            <Header />
            <div className="w-full h-full flex space-x-6">
                <HeroSection />
                <VoteSection />
            </div>
        </div>
    )
}
{/* <p className="text-[#0b0909] bold">{noOfAdditions !== 5 ?` ${noOfAdditions}/5 Additions`: "Done"}</p>
<p className="text-[#0b0909] italic">"{story}"</p> */}
{/* <textarea
className="w-full h-[20rem] bg-red-200 ring-0 outline-none px-4 py-6 rounded-md"
value={addition}
onChange={(e) => { setAddition(e.currentTarget.value); }}
/>
<button
onClick={() => { setStory(prevValues => prevValues + addition); setNoOfAdditions(prevValues => prevValues + 1); setAddition(""); LinkToEnd(); }}
className="bg-slate-100 py-3 px-8 bg-opacity-40 rounded-2xl"
>Submit</button> */}