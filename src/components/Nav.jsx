import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    };

    let Links = [
        { name: "Home", link: "/home" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "For Your Visit", link: "/foryourvisit" },
        { name: "Online Payment", link: "/onlinepayment" },
    ];

    return (
        <>
            <nav className="nav-text px-3">
                <div className="xl:px-56 py-3">
                    <div className="top-0 z-20 mx-auto flex w-full items-center">
                        <div className="min-w-[100px]">
                            <img src="/src/assets/images/msc_logo.png" alt="Many Sleepy Customers - Blue Building"></img>
                        </div>

                        <a href="#" className="text-4xl text-left">Many Sleepy Customers</a>
                        <h2 className="ml-auto text-right text-4xl">(123) 456-7890</h2>
                    </div>
                </div>


                <hr className="border-gray-300 opacity-50" />


                <div className="xl:px-56 py-3">
                    <div className="w-full">
                        <div>
                            <ul className="hidden w-full md:flex items-center justify-between py-3 text-center text-2xl">
                                {
                                    Links.map((Link) => (
                                        <li key={Link.name}>
                                            <a href={Link.link} className="mx-4 hover:text-gray-300">{Link.name}</a>
                                        </li>
                                    ))
                                }
                                <li className="ml-auto text-right">
                                    <a href="link" className="hover:text-gray-300">1234 Something Drive Santa Cruz, CA 95060</a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:hidden text-right">
                            <button onClick={toggleNavbar}>
                                {isOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <hr className="border-gray-300 opacity-50" />
            {isOpen && (
                <div className="md:hidden flex flex-col items-center basis-full  bg-white pb-8">
                    <ul className="nav-text text-2xl">
                        {
                            Links.map((Link) => (
                                <li key={Link.name}>
                                    <a href={Link.link} className="hover:text-gray-300">{Link.name}</a>
                                </li>
                            ))
                        }
                        <li className="ml-auto text-right">
                            <a href="link" className="hover:text-gray-300">1234 Something Drive Santa Cruz, CA 95060</a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Nav;