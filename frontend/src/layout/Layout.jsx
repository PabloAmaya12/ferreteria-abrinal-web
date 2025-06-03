import Header from '../components/Header/Header';
import Header_v2 from '../components/Header/Header_v2';
import Footer from '../components/Footer/Footer';
import Footer_v2 from '../components/Footer/Footer_v2';
import Routers from '../routes/Routers';

const Layout = () => {
    return (
        <>
            <Header_v2 />
            <main>
                <Routers />
            </main>
            <Footer_v2 />
        </>
    );
};

export default Layout;