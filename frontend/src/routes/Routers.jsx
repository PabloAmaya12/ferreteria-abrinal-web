import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Contact from '../pages/Contact';

const Routers = () => {
    return <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Catalog' element = {<Catalog />} />
        <Route path = '/Contact' element = {<Contact />} />
    </Routes>
};

export default Routers;