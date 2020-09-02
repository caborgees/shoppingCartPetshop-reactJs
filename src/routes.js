//importa dependencias
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//importa paginas
import Home from './pages/Home';
import Produto from './pages/Produto';


const Routes = () => {
    return(
        <BrowserRouter>
          
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/produto" component={Produto} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;