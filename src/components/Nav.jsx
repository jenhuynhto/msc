

const Nav = () => {
    const content = <>
    </>
    return (
        <nav className="nav-text">
            <div className="flex items-center justify-between px-64 py-3">
                <div>
                    <img src="/src/assets/images/msc_logo.png" alt="Many Sleepy Customers - Blue Building"></img>
                </div>

                <a href="#" className="px-5 text-4xl">Many Sleepy Customers</a>
                <h2 className="flex-grow"></h2>
                <h2 className="text-right text-4xl">(123) 456-7890</h2>
            </div>


            <hr className="border-gray-700 border-t" />


            <div className="flex items-center justify-between px-64 py-3 text-xl">
                <a href="#" className="mx-4 hover:text-gray-300">Home</a>
                <a href="#" className="mx-4 hover:text-gray-300">About</a>
                <a href="#" className="mx-4 hover:text-gray-300">Services</a>
                <a href="#" className="mx-4 hover:text-gray-300">For Your Visit</a>
                <a href="#" className="mx-4 hover:text-gray-300">Online Payment</a>
                <h2 className="flex-grow"></h2>
                <a href="https://www.google.com/maps?client=firefox-b-1-d&sca_esv=806c85fb53054c4e&sca_upv=1&sxsrf=ADLYWIJ448-4XkoGFHQkveeVthtW3ezjUQ:1715114692515&gs_lp=Egxnd3Mtd2l6LXNlcnAiB21vbnRvcGUqAggAMgcQIxixAhgnMg0QLhiABBixAxhDGIoFMgwQABiABBhDGIoFGAoyDRAuGIAEGLEDGEMYigUyFhAuGIAEGLEDGEMYgwEYxwEYigUYrwEyDRAuGIAEGLEDGEMYigUyChAAGIAEGEMYigUyEBAuGIAEGMcBGAoYjgUYrwEyChAAGIAEGEMYigUyBxAAGIAEGApIlRBQvQNYzwdwAXgBkAEBmAGLAaABmQaqAQMyLjW4AQHIAQD4AQGYAgegAq0FwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgoQIxiABBgnGIoFwgIEECMYJ8ICEBAAGIAEGLEDGEMYgwEYigXCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIQEAAYgAQYsQMYgwEYigUYCsICCBAAGIAEGLEDwgIQEC4YgAQYsQMYQxiDARiKBcICDRAAGIAEGEMYyQMYigXCAg4QLhiABBixAxjHARivAcICChAuGIAEGEMYigXCAhAQLhiABBjRAxhDGMcBGIoFwgILEC4YgAQYsQMYgwHCAhMQLhiABBixAxhDGMcBGIoFGK8BwgIOEC4YgAQYxwEYjgUYrwHCAgUQLhiABMICCxAuGIAEGMcBGK8BwgIFEAAYgATCAggQLhiABBjlBMICFBAuGIAEGJcFGNwEGN4EGOAE2AEBmAMA4gMFEgExIECIBgGQBgq6BgYIARABGBSSBwMzLjSgB6GAAQ&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KfdaIksEzY-AMcMXq3MUCLWg&daddr=2340+Montpelier+Dr,+San+Jose,+CA+95116"
                    className="text-right hover:text-gray-300">1234 Something Drive Santa Cruz, CA 95060</a>
            </div>
        </nav>

    );
};

export default Nav;