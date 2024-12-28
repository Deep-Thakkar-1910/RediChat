import ThemeToggle from "./ThemeToggler";

const Navbar = () => {
    return (
        <header className="fixed left-0 top-0 h-8 w-full bg-transparent lg:h-14">
            <nav className="flex items-center justify-center p-6 md:p-8 lg:p-12 xl:p-14">
                {/* <PreferencesTab/> */}
                <div className="absolute right-4 top-4">
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
