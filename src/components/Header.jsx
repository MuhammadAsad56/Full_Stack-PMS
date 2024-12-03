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
import Link from "next/link"
import { auth, signOut } from "../../auth"
import { Button } from "./ui/button"
import Image from "next/image"

const Header = async () => {
    const session = await auth()
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="flex py-5 justify-between items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0">
                        <img width={60} height={60} src="https://i.pinimg.com/736x/25/dc/47/25dc4724f96ecead1872f71ec2b4c57d.jpg" alt="" />
                    </a>
                    {
                        session ?
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger>
                                        <Image className="rounded-full" width={30} height={40} src={session?.user?.image ? session.user.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s'}/>
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <Link href={'/profile'}> <MenubarItem>Profile</MenubarItem></Link>
                                        <MenubarSeparator />
                                        <Link href={'/appointment'}><MenubarItem>My Appointment</MenubarItem></Link>
                                        <MenubarSeparator />
                                        <form
                                            action={async () => {
                                                "use server"
                                                await signOut()
                                            }}
                                            >
                                         <button className="ml-2 text-sm" type="submit">Sign Out</button>
                                        </form>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                            :
                            <Link href={'/signin'}>
                            <Button>Login</Button>
                            </Link>
                    }

                </div>
            </header>
        </div>
    )
}
export default Header;
