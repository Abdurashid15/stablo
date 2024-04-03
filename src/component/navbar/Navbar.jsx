import NavabarItemLeft from './NavabarItemLeft';
import NavbarItemCenter from './NavbarItemCenter';
import NavbarItemRight from './NavbarItemRight';

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-center items-center gap-6 mt-2">
                <NavabarItemLeft />
                <NavbarItemCenter />
                <NavbarItemRight />
            </nav>
        </>
    );
};

export default Navbar;
