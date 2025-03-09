import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Menu as MenuUI, Transition } from "@headlessui/react";
import logo from "../assets/adla.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full fixed top-0 left-0 z-50  transition-all duration-300 ${isScrolled ? "bg-white " : "bg-[#fde6e4]"}`}>
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Adla Logo" className="h-10 w-auto md:h-[33px] md:w-[109px]" />
                </Link>

                <div className="hidden lg:flex items-center space-x-8 uppercase text-[14px] font-medium text-black">
                    <MenuUI as="div" className="relative">
                        <MenuUI.Button className="hover:text-red-500 flex items-center font-semibold uppercase">
                            Home
                        </MenuUI.Button>
                    </MenuUI>

                    <MenuUI as="div" className="relative">
                        <MenuUI.Button className="hover:text-red-500 flex items-center font-semibold uppercase">
                            Pages
                        </MenuUI.Button>
                    </MenuUI>

                    <MenuUI as="div" className="relative">
                        <MenuUI.Button className="hover:text-red-500 flex items-center font-semibold uppercase">
                            Our Solutions
                        </MenuUI.Button>
                    </MenuUI>

                    <MenuUI as="div" className="relative">
                        <MenuUI.Button className="hover:text-red-500 flex items-center font-semibold uppercase">
                            Our Work
                        </MenuUI.Button>
                    </MenuUI>

                    <MenuUI as="div" className="relative">
                        <MenuUI.Button className="hover:text-red-500 flex items-center font-semibold uppercase">
                            Contact
                        </MenuUI.Button>
                    </MenuUI>
                </div>

                <Link 
                    to="/get-a-proposal" 
                    className="hidden lg:block bg-black text-white text-[14px] font-medium uppercase rounded-full py-[15px] px-[30px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
                >
                    GET A PROPOSAL
                </Link>

                <button className="lg:hidden text-black focus:outline-none ml-auto" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-lg z-50 p-6 overflow-y-auto transition-all">
                    <button className="absolute top-4 right-4 text-black" onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>

                    <div className="flex flex-col space-y-4 text-black text-[16px] font-medium mt-8">
                        <button className="flex justify-between w-full px-4 py-2 text-left border-b">HOME</button>
                        <button className="flex justify-between w-full px-4 py-2 text-left border-b">PAGES</button>
                        <button className="flex justify-between w-full px-4 py-2 text-left border-b">OUR SOLUTIONS</button>
                        <button className="flex justify-between w-full px-4 py-2 text-left border-b">OUR WORK</button>
                        <button className="flex justify-between w-full px-4 py-2 text-left border-b">CONTACT</button>
                    </div>

                    <Link 
                        to="/get-a-proposal" 
                        className="block bg-black text-white text-[14px] font-medium uppercase rounded-full py-[15px] px-[30px] transition duration-500 ease-in-out hover:bg-[#EF4335] mt-6"
                    >
                        GET A PROPOSAL
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
