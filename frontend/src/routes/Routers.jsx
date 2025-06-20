import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Catalog_v2 from '../pages/Catalog_v2';
import Contact from '../pages/Contact';
import LogIn from '../pages/LogIn';

const Routers = () => {
    return <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Catalog' element = {<Catalog />} />
        <Route path = '/Catalog_v2' element = {<Catalog_v2 />} />
        <Route path = '/Contact' element = {<Contact />} />
        <Route path = '/LogIn' element = {<LogIn />} />
    </Routes>
};

export default Routers;