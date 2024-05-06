import FlowComponent from "@/app/FlowComponent"
import Navbar from "@/components/Navbar";
import About_Flow from "@/components/About/page";
import React from "react";
export default function HomePage(){
  return(
    <div className="dark:bg-black/80 h-screen">
        <Navbar />
        <div className="flex flex-col p-8 md:items-center md:justify-center">
            <div className="text-4xl font-bold text-pink-600">
                Flow Ops
            </div>
            <div className="text-gray-500 dark:text-gray-200 text-sm md:text-base font-medium">
                Automate your workflows with FlowOps
            </div>
            <p className="mt-8 sm:mt-16 text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-200 md:w-1/2 lg:text-center">
                No need to write code to automate your workflows. <br />
                Just drag and drop the components and connect them to automate your workflows.
            </p>
        </div>
        <div className="flex items-center justify-center">
            <FlowComponent />
        </div>
        <div>
            <About_Flow />
        </div>
    </div>
  )
}