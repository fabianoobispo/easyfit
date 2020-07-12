import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Agradecimento from './pages/Agradecimento';
import Comercial from './pages/Comercial';
import Personal from './pages/Personal';
import Usuarios from './pages/Usuarios';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/agradecimento" component={Agradecimento} />
                <Route path="/comercial" component={Comercial} />
                <Route path="/personal" component={Personal} />
                <Route path="/usuarios" component={Usuarios} />
            </Switch>
        </BrowserRouter>
    );
}
