import Image from "next/image";
import img from "./images/logo.webp"
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from "react";


export default function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <aside className="">
                <Hamburger toggled={isOpen} toggle={setOpen} size={38} duration={0.9} distance="sm" color="#000000" label="Show menu" easing="ease-in" direction="left" hideOutline={false}
                    onToggle={toggled => {
                        if (toggled) {
                            // open a menu
                        } else {
                            // close a menu
                        }
                    }}
                />
            </aside>
        </>
    )
}