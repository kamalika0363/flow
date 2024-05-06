import {Github} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return(
        <div className="px-4 md:px-12 py-3 border-b border-pink-200 drop-shadow-md">
            <div className="flex justify-between">
                {/*<div className="text-2xl font-semibold text-pink-600">*/}
                {/*    Flow Ops*/}
                {/*</div>*/}
                <div className="flex space-x-4 ml-auto text-gray-500 font-medium">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="https://flow-ops.vercel.app/docs/intro">
                        About
                    </Link>
                    <Link href="https://github.com/kamalika0363/FlowOps">
                        <Github />
                    </Link>
                </div>
            </div>
        </div>
    )
}