import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <nav className="nav-text px-3">
                <div className="xl:px-56 py-3">
                    <div className="top-0 z-20 mx-auto flex w-full items-center">
                        <div className="min-w-[100px]">
                            <Link to="/"><img src="/src/assets/images/msc_logo.png" alt="Many Sleepy Customers - Blue Building"></img></Link>
                        </div>

                        <Link to="/" className="text-4xl text-left">Many Sleepy Customers</Link>
                        <h2 className="ml-auto text-right text-4xl">(123) 456-7890</h2>
                    </div>
                </div>


                <hr className="border-gray-300 opacity-50" />


                <div className="xl:px-56 py-3">
                    <div className="w-full">
                        <div>
                            <ul className="hidden w-full md:flex items-center justify-between py-3 text-center text-2xl">
                                <li className="nav-item">
                                    <ActiveLink to="/">Home</ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink to="/about">About</ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink to="/services">Services</ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink to="/foryourvisit">For Your Visit</ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <a href="https://qportal.liquidemr.com/testEMR/Login/PatientPortal?clinic=msc&token=0&quickpay=true" target="_blank" rel="noopener noreferrer">Online Payment</a>
                                </li>
                                <li className="ml-auto text-right">
                                    <a href="link" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">1234 Something Drive Santa Cruz, CA 95060</a>
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
                        <li className="nav-item-mobile">
                            <ActiveLink to="/">Home</ActiveLink>
                        </li>
                        <li className="nav-item-mobile">
                            <ActiveLink to="/about">About</ActiveLink>
                        </li>
                        <li className="nav-item-mobile">
                            <ActiveLink to="/services">Services</ActiveLink>
                        </li>
                        <li className="nav-item-mobile">
                            <ActiveLink to="/foryourvisit">For Your Visit</ActiveLink>
                        </li>
                        <li className="nav-item-mobile">
                            <a href="https://qportal.liquidemr.com/testEMR/Login/PatientPortal?clinic=msc&token=0&quickpay=true" target="_blank" rel="noopener noreferrer">Online Payment</a>
                        </li>
                        <li className="ml-auto text-right">
                            <a href="link" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">1234 Something Drive Santa Cruz, CA 95060</a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

function ActiveLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Nav;