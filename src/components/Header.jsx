"use client"
import React from "react"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="flex py-5 justify-between items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="text-2xl font-bold">Logo</span>
                    </a>
                    <Menubar>
                        <MenubarMenu>
                        <MenubarTrigger>
                            <Image width={30} height={40} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s'}/>
                        </MenubarTrigger>
                            <MenubarContent>
                               <Link href={'/profile'}> <MenubarItem>Profile</MenubarItem></Link>
                                <MenubarSeparator />
                                <Link href={'/appointment'}><MenubarItem>My Appointment</MenubarItem></Link>
                                <MenubarSeparator />
                                <MenubarItem>Logout</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                </div>
            </header>
        </div>
    )
}
export default Header;
