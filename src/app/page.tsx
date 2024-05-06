import FlowComponent from "@/app/FlowComponent"
import Navbar from "@/components/Navbar";

export default function HomePage(){
  return(
    <div className="">
        <Navbar />
        <div className="flex flex-col p-8">
            <div className="text-4xl font-bold text-pink-600">
                Flow Ops
            </div>
            <div className="text-gray-500 text-sm md:text-base font-medium">
                Automate your workflows with FlowOps
            </div>
            <p className="mt-8 sm:mt-24 text-xl md:text-2xl font-semibold text-gray-500 md:w-1/2">
                No need to write code to automate your workflows. <br />
                Just drag and drop the components and connect them to automate your workflows.
            </p>
        </div>
        <div className="-z-50">
            <FlowComponent />
        </div>
    </div>
  )
}