import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Home_v2 from '../pages/Home_v2';
import Contact from '../pages/Contact';
import Catalog from '../pages/Catalog';
import Catalog_v2 from '../pages/Catalog_v2';
import Catalog_v3 from '../pages/Catalog_v3';

const Routers = () => {
    return <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Home_v2' element = {<Home_v2 />} />
        <Route path = '/Contact' element = {<Contact />} />
        <Route path = '/Catalog' element = {<Catalog />} />
        <Route path = '/Catalog_v2' element = {<Catalog_v2 />} />
        <Route path = '/Catalog_v3' element = {<Catalog_v3 />} />
    </Routes>
};

export default Routers;