'use client'

import { useState } from "react"

const Navbar = () => {
    const [value, setValue] = useState('')
    const [open, setOpen] = useState('')

    function handleMenu() {
        if (value !== 'open') {
            setValue('open')
            setOpen('flex')
        } else {
            setValue('')
            setOpen('hidden')
        }
    }

    return (
        <nav className="flex items-center justify-between font-bold text-white">
            <h2 className="text-white">Wellpinho Studios</h2>

            <div className="hidden h-10 md:flex md:space-x-8">
                <div className="group">
                    <a href="#">About</a>
                    <div className="link">

                    </div>
                </div>

                <div className="group">
                    <a href="#">Creers</a>
                    <div className="link">
                        
                    </div>
                </div>

                <div className="group">
                    <a href="#">Events</a>
                    <div className="link">
                        
                    </div>
                </div>

                <div className="group">
                    <a href="#">Produtcts</a>
                    <div className="link">
                        
                    </div>
                </div>

                <div className="group">
                    <a href="#">Support</a>
                    <div className="link">
                        
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <button 
                    onClick={() => handleMenu()}
                    id="menu-button"
                    type="button"
                    className={`
                        ${value}
                        z-40
                        block
                        hamburger
                        md:hidden
                        focus:outline-none
                    `}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
            </div>

            <div 
                id="menu" 
                className={`
                    absolute 
                    top-0 
                    bottom-0 
                    left-0 
                    ${open}
                    flex-col 
                    self-end 
                    w-full 
                    min-h-screen 
                    py-1 
                    pt-40 
                    pl-12 
                    space-y-3 
                    text-lg 
                    text-white 
                    uppercase 
                    bg-black
                `}>
                <a href="" className="hover:text-pink-500">About</a>
                <a href="" className="hover:text-pink-500">Careers</a>
                <a href="" className="hover:text-pink-500">Events</a>
                <a href="" className="hover:text-pink-500">Products</a>
                <a href="" className="hover:text-pink-500">Support</a>
            </div>
        </nav>
    )
}

export default Navbar