"use client";
import {Github, Moon, Sun} from "lucide-react";
import Link from "next/link";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";

export default function Navbar() {
    const {setTheme} = useTheme();

    return(
        <div className="px-4 md:px-12 py-4 border-b border-pink-200 drop-shadow-md dark:drop-shadow-lg">
            <div className="flex justify-between">
                {/*<div className="text-2xl font-semibold text-pink-600">*/}
                {/*    Flow Ops*/}
                {/*</div>*/}
                <div className="flex space-x-4 ml-auto text-gray-500 dark:text-gray-200 font-medium items-center">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="https://flow-ops.vercel.app/docs/intro">
                        About
                    </Link>
                    <Link href="https://github.com/kamalika0363/FlowOps">
                        <Github />
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}