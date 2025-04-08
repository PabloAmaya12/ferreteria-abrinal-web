import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Catalog from '../pages/Catalog';

const Routers = () => {
    return <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Contact' element = {<Contact />} />
        <Route path = '/Catalog' element = {<Catalog />} />
    </Routes>
};

export default Routers;