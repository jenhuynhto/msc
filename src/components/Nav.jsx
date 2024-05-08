
const Nav = () => {
    let Links = [
        {name: "Home", link:"/"},
        {name: "About", link:"/"},
        {name: "Services", link:"/"},
        {name: "For Your Visit", link:"/"},
        {name: "Online Payment", link:"/"},
    ];

    return (
        <nav className="bg-slate-600 nav-text">
            <div className="flex items-center justify-between px-64 py-3">
                <div className="min-w-[100px]">
                    <img src="/src/assets/images/msc_logo.png" alt="Many Sleepy Customers - Blue Building"></img>
                </div>

                <a href="#" className="px-5 text-4xl">Many Sleepy Customers</a>
                <h2 className="ml-auto text-right text-4xl">(123) 456-7890</h2>
            </div>

            <hr className="border-gray-700 border-t" />


            <div className="px-64 py-3 bg-slate-600 absolute w-full">
                <ul className="md:flex items-center justify-between py-3">
                    {
                        Links.map((Link)=>(
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
        </nav>

    );
};

export default Nav;