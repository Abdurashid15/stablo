import Navbar from '../navbar/Navbar';
import Poster from './Poster';

const PageHome = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <section className="mt-[60px]">
                <Poster />
            </section>
        </>
    );
};

export default PageHome;
