import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Catalog from '../pages/Catalog';
import Catalog_v2 from '../pages/Catalog_v2';

const Routers = () => {
    return <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Contact' element = {<Contact />} />
        <Route path = '/Catalog' element = {<Catalog />} />
        <Route path = '/Catalog_v2' element = {<Catalog_v2 />} />
    </Routes>
};

export default Routers;